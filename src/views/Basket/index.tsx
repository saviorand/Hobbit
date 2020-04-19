import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Home from '../Home/index';
import BasketProduct from '../../components/BasketProduct/index';
import ScreenTitle from '../../components/ScreenTitle/index';
import BuyButton from '../../components/BuyButton/index';
/*
const GET_SHOPS = gql`
query {
  shops {
    id
    shopName
    workingHours
    distanceTo
  }
}
`*/

export default function Basket({ navigation }) {

  /*const { loading, error, data } = useQuery(GET_SHOPS);

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const shops = data.shops.map(shop => (
         <BasketProduct key={shop.id} shopid={shop.id} 
         shopTitle={shop.shopName} distanceTo={shop.distanceTo} workingHours={shop.workingHours} />
        ))*/

  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Моя корзина'}/>
      <ScrollView>
      <View style={styles.scrollFrame}>
      <BasketProduct key={1} shopid={1} 
         productTitle={'Короткое название продукта'} 
         productPrice={'264.60 Р'} subPrice={'3x88.20 Р'} />
       <BasketProduct key={2} shopid={1} 
         productTitle={'Короткое название продукта'} 
         productPrice={'264.60 Р'} subPrice={'3x88.20 Р'} />
         <BasketProduct key={3} shopid={1} 
         productTitle={'Короткое название продукта'} 
         productPrice={'264.60 Р'} subPrice={'3x88.20 Р'} />
         <BasketProduct key={4} shopid={1} 
         productTitle={'Короткое название продукта'} 
         productPrice={'264.60 Р'} subPrice={'3x88.20 Р'} />
      </View>
    </ScrollView>
    <BuyButton buttonText={'Заказать'} deliveryTime={'40 минут'} orderTotal={'1238Р'} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  	paddingTop: Constants.statusBarHeight,
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollFrame: {
  	flex: 1,
  	width: 350,
  	paddingBottom: 25,
  }
})
