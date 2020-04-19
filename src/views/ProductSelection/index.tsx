import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import ShopPreview from '../../components/ShopPreview/index';
import ScreenTitle from '../../components/ScreenTitle/index';
import ProductPreview from '../../components/ProductPreview/index';
import HorizontalSelector from '../../components/HorizontalSelector/index';

const GET_PRODUCTS = gql`
  query($productIds: [ID]!) {
  productItems(productIds: $productIds){
    id
    productItemName
    price
    weightIndicator
  }
}
`

export default function ProductSelection({ route, navigation }) {

  const { productItems, productSections, productSectionIds, currentBigCategory } = route.params;

  const [selectedSection, sectionSelect] = useState(0);

  const allProducts = productItems.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    });

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
      variables: { "productIds": allProducts
       }});

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text style={styles.container}>`Error! ${error.message}`</Text>;


  const productList = data.productItems.filter(item => productItems[selectedSection].includes(item.id))

  const displayedProducts = productList.map(product => (
       
      <ProductPreview key={product.id} productPrice={product.price} 
       productName={product.productItemName} 
       productWeight={product.weightIndicator}
       productId={product.id} />

        ));
 
  const sectionsForScroller: Array<Object> = [];
  
  for (let i = 0; i < productSectionIds.length; i++) {
    sectionsForScroller.push({
    categoryNames: productSections[i],
    categoryIds: i,
  })
  };

  return (
    <SafeAreaView style={styles.container}>
  	<View>
      <ScreenTitle screenTitle={currentBigCategory}/>
      <View style={styles.innerWrapper}>
      <HorizontalSelector categories={sectionsForScroller}
      subSect={[selectedSection, sectionSelect]} 
       />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollFrame}>
      {displayedProducts}
      </View>
      </ScrollView>
     </View>
    </View>
    </SafeAreaView>
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
