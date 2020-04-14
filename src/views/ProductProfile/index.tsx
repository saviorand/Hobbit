import React, { useState } from "react";
import { ScrollView, SafeAreaView, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import ProductCard from '../../components/ProductCard/index';
import BuyButton from '../../components/BuyButton/index';
import MoreInfo from '../../components/MoreInfo/index';

const GET_PRODUCT_INFO = gql`
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

export default function ProductProfile () {


  return (
    <SafeAreaView style={styles.container}>
     <ProductCard productTitle={'Короткое название продукта'} productWeight={'8000 гр'}
     productPrice={'88.20 Р'} />
     <BuyButton buttonText={'Купить'} />
     <MoreInfo />
    </SafeAreaView>
  );
};
      

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },
})