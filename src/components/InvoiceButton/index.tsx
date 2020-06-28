import React, { useState } from "react";
import { TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage/index';
import * as Print from 'expo-print';


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

export default function InvoiceButton (props) {

  const navigation = useNavigation();
  const items = useSelector(state => state);

  let allProductsUnique = [];
  
  allProductsUnique = items.map(item => {
        return item.item
    }).filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

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
 let invoiceList = 0;
 let currentTotal = 0;

 if (basketProducts[0] !== undefined) {
  
  currentTotal = basketProducts[0].reduce((accumulator, currentValue) => {
    return accumulator
     + currentValue.price*items.filter(product => product.item === currentValue.id).length;
  }, 0);

  invoiceList = basketProducts[0].map(item => {
    return {
      description: item.productItemName,
      quantity: items.filter(product => product.item === item.id).length.toFixed(2),
      amount: {value: item.price.toFixed(2), currency: 'RUB'},
      vat_code: 2,
      payment_mode: 'full_prepayment',
      payment_subject: 'commodity',

    };
  })};
  //JSON.stringify(invoiceList) + 'Total: ' + currentTotal)}

  return (
     <TouchableWithoutFeedback onPress={() => 
       //Print.printToFileAsync({
       //html: `<h1> Wasup </h1>`
     //})
     {console.log('hey joe')}
 }>
     <View style={styles.touchableButton}>
     <Text style={styles.navButtonText}>Мне нужен чек</Text>
     </View>
     </TouchableWithoutFeedback>
  );
};
      

const styles = StyleSheet.create({
  touchableButton: { 
    borderRadius: 29,
    paddingVertical: 2,
    marginHorizontal: 8,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FC8D24',
    minWidth: 300,

  },
  navButtonText: {
    padding: 8,
    fontSize: 16,
    color: '#000'
  }
});
