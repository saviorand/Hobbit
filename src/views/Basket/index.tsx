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

  let allProductsUnique = [];

  if ((Object.values(items).length !== 0)) {
  
  allProductsUnique = items.map(item => {
        return item.item
    }).filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  };


  const { loading, error, data } = useQuery(GET_BASKET_PRODUCTS, {
      variables: { "productIds": allProductsUnique
       }});

  if (loading) return <ErrorMessage errorText={`Загрузка...`}/>;
  if (error) return <ErrorMessage errorText={`Произошла ошибка! ${error.message}`}/>;

  const basketProducts = [];


  if ((Object.values(data.productItems).length !== 0)){ 
    basketProducts.push(data.productItems)
  };

 let productList = []; 

  console.log(items)

 if (basketProducts[0] !== undefined) {
  productList = basketProducts[0].map(item => (
       
      <BasketProduct key={item.id} itemId={item.id} 
         productTitle={item.productItemName} 
         subPrice={item.price} 
         itemStock={items.filter(product => product.item === item.id).length} />

        ));
   }
  
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Моя корзина'}/>
      <ScrollView>
      <View style={styles.scrollFrame}>
      {(productList.length !== 0) 
        ? productList 
        : 
        <ErrorMessage errorText={'Похоже, вы ещё ничего не взяли. Положите сюда что-нибудь'}/>}
      </View>
    </ScrollView>
    <BuyButton buttonText={'Заказать'} 
    deliveryTime={'40 минут'} orderTotal={basketProducts[0].reduce((accumulator, currentItem) => {
      return accumulator.price + currentItem.price;
    })} />
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
