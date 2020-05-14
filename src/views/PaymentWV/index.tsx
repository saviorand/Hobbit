import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import PaymentView from '../../components/PaymentView/index';
import { decode as atob, encode as btoa } from 'base-64';
import * as Random from 'expo-random';

import ErrorMessage from '../../components/ErrorMessage/index';
// Use when it's fixed in expo: import 'react-native-get-random-values';
//import { nanoid } from 'nanoid';

export default function PaymentWV({ route, navigation }) {

	const { orderSum, orderContent } = route.params;

	const [ isLoading, setIsLoading ] = useState(false); 
	const [ data, setData ] = useState([]);

	let username = '707127';
	let password = 'test_hztWs63yyDKXJyi4QvsJiknePZ6tWSRc8R-_DNvhRAY';
	let authString = username + ':' + password;
	let orderCount = 1;

  useEffect(() => {
		async function getPaymentLink(authString) {
  
  setIsLoading(true);
  orderCount += 1;

  try {
    let randomBytes = await Random.getRandomBytesAsync(16);
    let response = await fetch('https://payment.yandex.net/api/v3/payments', {
  method: 'POST',
  headers: {
  	Authorization: 'Basic ' + btoa(authString),
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Idempotence-key': randomBytes,

  },
  body: JSON.stringify({
        "amount": {
          "value": orderSum,
          "currency": "RUB"
        },
        "capture": true,
        "confirmation": {
          "type": "redirect",
          "return_url": "exp://192.168.0.122:19000"
        },
        "description": "Заказ №" + orderCount,
        "receipt": {
        "customer": {
            "full_name": "Иванов Иван Иванович",
            "phone": "79000000000"
        },
        "items": orderContent
      },
      }),
   });
    let responseJson = await response.json();
    setData(responseJson.confirmation.confirmation_url);
  } catch (error) {
    console.error(error);
  } finally {
  	setIsLoading(false);
  }
    
}; 

  getPaymentLink(authString);

}, []);


    return isLoading ? <ErrorMessage errorText={'Загрузка...'} /> 
    : <PaymentView displayUri={data} /> 
};
