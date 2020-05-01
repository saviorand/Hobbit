import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../models/basket';

import BasketProduct from '../../components/BasketProduct/index';
import ScreenTitle from '../../components/ScreenTitle/index';
import BuyButton from '../../components/BuyButton/index';
import ErrorMessage from '../../components/ErrorMessage/index';

const GET_BASKET_PRODUCTS = gql`
  query($productIds: [ID]!) {
  productItems(productIds: $productIds){
    id
    productItemName
    price
    weightIndicator
  }
}
`

export default function Basket({ navigation }) {

  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const addNewItem = item => dispatch(addItem(item));
  const deleteNewItem = id => dispatch(deleteItem(id));

  let allProducts = [];

  if ((Object.values(items).length !== 0)) {
  
  allProducts = items.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
    });

  };

  const { loading, error, data } = useQuery(GET_BASKET_PRODUCTS, {
      variables: { "productIds": [allProducts.item]
       }});

  if (loading) return <ErrorMessage errorText={`Загрузка...`}/>;
  if (error) return <ErrorMessage errorText={`Произошла ошибка! ${error.message}`}/>;

  const basketProducts = [];

  if ((Object.values(data.productItems).length !== 0)){ 
    basketProducts.push(data.productItems)
  };

  let productList = [];

  if ((Object.values(basketProducts)[0][0] !== null)) 
  { 
    productList = basketProducts.map(item => (
       
      <BasketProduct key={item[0].id} itemId={item[0].id} 
         productTitle={item[0].productItemName} 
         subPrice={item[0].price} />

        ));
   };
  
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Моя корзина'}/>
      <ScrollView>
      <View style={styles.scrollFrame}>
      {((Object.values(productList).length !== 0)) 
        ? productList 
        : 
        <ErrorMessage errorText={'Похоже, вы ещё ничего не взяли. Положите сюда что-нибудь'}/>}
      </View>
    </ScrollView>
    <BuyButton buttonText={'Заказать'} 
    deliveryTime={'40 минут'} orderTotal={'1238Р'} />
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
  },
})
