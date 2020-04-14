import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import ShopPreview from '../../components/ShopPreview/index';
import ScreenTitle from '../../components/ScreenTitle/index';
import ProductPreview from '../../components/ProductPreview/index';
import HorizontalSelector from '../../components/HorizontalSelector/index';

const GET_PRODUCTS = gql`
  query($id: ID!) {
  shop(id: $id) {
    id
    shopName
    workingHours
    distanceTo
    categories {
      id
      categoryName
      categoryContent {
        id
        categoryPreviewName
        categoryPreviewContent {
          id
          productItemName
          productPicture
          isInStock
          quantityInStock
          price
          weightIndicator
        }
      }
    }
  }
}
`

export default function ProductSelection({ navigation }) {

  //const { categoryId } = route.params;


  const { loading, error, data } = useQuery(GET_PRODUCTS, {
      variables: { "id": "1" }
    });

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const productsArray = data.shop.categories[0].categoryContent[0].categoryPreviewContent;

  const productList = productsArray.map(product => (
       
       <ProductPreview key={product.id} productPrice={product.price} 
       productName={product.productItemName} productWeight={product.weightIndicator} />

        ));

  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Что возьмём?'}/>
      <View style={styles.innerWrapper}>
      <HorizontalSelector category={'Греча'} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollFrame}>
      {productList}
      </View>
      </ScrollView>
     </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  	paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  innerWrapper: {
  	width: '100%',
  },
  scrollFrame: {
  	flex: 1,
  	alignSelf: 'center',
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	width: 350,
  	paddingBottom: 25,
  	marginHorizontal: 'auto',
  	justifyContent: 'center',
  }
})
