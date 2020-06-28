import React, { useState } from "react";
import { ScrollView, SafeAreaView, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import ProductCard from '../../components/ProductCard/index';
import BuyButton from '../../components/BuyButton/index';
import MoreInfo from '../../components/MoreInfo/index';
import ErrorMessage from '../../components/ErrorMessage/index';
import ScreenTitle from '../../components/ScreenTitle/index';
import BackButton from '../../components/BackButton/index';

const GET_PRODUCT_INFO = gql`
  query($productIds: [ID]!) {
  productItems(productIds:$productIds){
    id
    productItemName
    productPicture
    isInStock
    quantityInStock
    contents
    about
    weightIndicator
    price
  }
}
`

export default function ProductProfile ({ route, navigation }) {
  
  const { productId } = route.params;

  const { loading, error, data } = useQuery(GET_PRODUCT_INFO, {
      variables: { "productIds": Array.from(productId) }
    });

  if (loading) return <ErrorMessage errorText={`Загрузка...`}/>;
  if (error) return <ErrorMessage errorText={`Произошла ошибка! ${error.message}`}/>;
  
  const thisProduct = data.productItems[0];
  return (
    <SafeAreaView style={styles.container}>
     <ScreenTitle screenTitle={thisProduct.productItemName} leftButton={<BackButton onPress={navigation.goBack} />} />
     <ScrollView>
     <ProductCard productTitle={thisProduct.productItemName} 
     productPicture={thisProduct.productPicture} productWeight={thisProduct.weightIndicator}
     productPrice={thisProduct.price} />
     <BuyButton buttonText={'Купить'} productToBuy={thisProduct.id}/>
     <MoreInfo contents={thisProduct.contents} about={thisProduct.about} />
     </ScrollView>
    </SafeAreaView>
  );
};
      

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
})