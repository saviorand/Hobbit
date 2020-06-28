import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ShopSelection from "../ShopSelection/index";
import Basket from "../Basket/index";
import Settings from "../Settings/index";
import { createStackNavigator } from '@react-navigation/stack';
//import Card from "../Card/index";
//import Home from "../Home/index";
import Products from "../Products/index";
//import ShopSelection from '../ShopSelection/index';
import ProductSelection from '../ProductSelection/index';
//import Map from '../Map/index';
import AddressSelectionScreen from '../AddressSearch/index';
import ProductProfile from '../ProductProfile/index';
import PaymentWV from '../PaymentWV/index';
import TermsView from '../TermsView/index';
import ThankYou from '../ThankYou/index';
import ClarifyDetails from '../ClarifyDetails/index';
//import Basket from '../Basket/index';

import FocusedTint from "../../components/FocusedButtonTint/index";
import SettingsIcon from "../../components/SettingsButton/index";
import BasketIcon from "../../components/BasketButton/index";
import ShopIcon from "../../components/ShopButton/index";
import ScreenTitle from '../../components/ScreenTitle/index';
import BackButton from '../../components/BackButton/index';

const Stack = createStackNavigator();


export default function Home() {
  return (
  <Stack.Navigator initialRouteName="shop-selection" screenOptions={{header: ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name === 'details'
      ? ''
      : (scene.route.name !== 'product-selection') && (scene.route.name !== 'product-profile') && (scene.route.name !== 'payment')
      && (scene.route.name !== 'thank-you') && (scene.route.name !== 'terms-view') 
      ? scene.route.name : null;

      if (title !== null) {

  return (
    <ScreenTitle
      screenTitle={title}
      leftButton={
        previous ? <BackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    />
  )};
},
headerStyle: {
  height: 80, // Specify the height of your custom header
}}} headerMode="screen">
      <Stack.Screen name="shop-selection" component={ShopSelection} />
      <Stack.Screen name="product-categories" component={Products} />
      <Stack.Screen name="product-selection" component={ProductSelection} />
      <Stack.Screen name="product-profile" component={ProductProfile} />
      <Stack.Screen name="basket" component={Basket} />
      <Stack.Screen name="address-selection" component={AddressSelectionScreen} />
      <Stack.Screen name="payment" component={PaymentWV} />
      <Stack.Screen name="thank-you" component={ThankYou} />
      <Stack.Screen name="details" component={ClarifyDetails} />
      <Stack.Screen name="terms-view" component={TermsView} />
     </Stack.Navigator>
   
  );
}

const styles = StyleSheet.create({
  label: {
  	paddingBottom: 10,
  },
})
