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

const GET_PRODUCT_INFO = gql`
  query($productId: ID!) {
  productItem(productId:$productId){
    id
    productItemName
    productPicture
    isInStock
    quantityInStock
    contents
    about
    weightIndicator
    price
    related
    complementary
  }
}
`

export default function ProductProfile ({ route, navigation }) {
  
  const { productId } = route.params;

  const { loading, error, data } = useQuery(GET_PRODUCT_INFO, {
      variables: { "productId": productId }
    });

  if (loading) return <ErrorMessage errorText={`Загрузка...`}/>;
  if (error) return <ErrorMessage errorText={`Произошла ошибка! ${error.message}`}/>;
  
  const thisProduct = data.productItem;

  return (
    <SafeAreaView style={styles.container}>
     <ProductCard productTitle={thisProduct.productItemName} 
     productWeight={thisProduct.weightIndicator}
     productPrice={thisProduct.price} />
     <BuyButton buttonText={'Купить'} productToBuy={thisProduct.id}/>
     <MoreInfo contents={thisProduct.contents} about={thisProduct.about} />
    </SafeAreaView>
  );
};
      

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },
})