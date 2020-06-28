import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../../models/basket';

import ScreenTitle from '../../components/ScreenTitle/index';
import NavButton from '../../components/NavButton/index';
import InvoiceButton from '../../components/InvoiceButton/index';

export default function ThankYou({ route, navigation }) {

  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const clearUp = () => dispatch(clearBasket());
  
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Всё круто'}/>
      <View style={styles.thankYouMessage}>
      <View style={styles.textContainer}>
      <Text style={styles.textHeading}>Спасибо за покупку!</Text>
      <Text style={styles.textHeading}>{'Идентификатор вашего заказа: ' + route.params.id}</Text>
      </View>
      <View>
      <InvoiceButton />
      <NavButton whereTo={'Магазины, до которых мы сможем дотянуться'} buttonTitle={'Домой'} />
      </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  thankYouMessage: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '85%',
    maxWidth: '80%'
  },
  textContainer: {
    marginTop: 160,
  },
  textHeading: {
    fontSize: 24
  },
})
