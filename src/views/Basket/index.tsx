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
import BuyButton from '../../components/BuyButton/index';
import ErrorMessage from '../../components/ErrorMessage/index';
import CheckOutButton from '../../components/CheckOutButton/index';

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

  const [Total, setTotal] = useState(0);

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
 let buyButton = null;

 if (basketProducts[0] !== undefined) {
  productList = basketProducts[0].map(item => (
       
      <BasketProduct key={item.id} itemId={item.id} 
         productTitle={item.productItemName} 
         subPrice={item.price} 
         itemStock={items.filter(product => product.item === item.id).length} />

        ));
  
  let currentTotal = basketProducts[0].reduce((accumulator, currentValue) => {
    return accumulator
     + currentValue.price*items.filter(product => product.item === currentValue.id).length;
  }, 0);

  let invoiceList = basketProducts[0].map(item => {
    return {
      description: item.productItemName,
      quantity: items.filter(product => product.item === item.id).length.toFixed(2),
      amount: {value: item.price.toFixed(2), currency: 'RUB'},
      vat_code: 2,
      payment_mode: 'full_prepayment',
      payment_subject: 'commodity',

    };
  });

   buyButton = (<CheckOutButton buttonText={'Заказать'} 
    deliveryTime={'40 минут'} orderTotal={+(currentTotal.toFixed(2))} 
    orderContents={invoiceList} />);

   }
  
  return (
  	<View style={styles.container}>
      <ScrollView>
      <View style={styles.scrollFrame}>
      {(productList.length !== 0) 
        ? productList 
        : 
        <ErrorMessage errorText={'Похоже, вы ещё ничего не взяли. Положите сюда что-нибудь'}/>}
      </View>
    </ScrollView>
    {(buyButton) ? buyButton : null}
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
