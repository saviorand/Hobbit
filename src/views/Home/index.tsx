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
  <Stack.Navigator initialRouteName="ShopSelection" screenOptions={{header: ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : (scene.route.name !== 'ProductSelection') && (scene.route.name !== 'ProductProfile')
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
      <Stack.Screen name="Магазины, до которых мы сможем дотянуться" component={ShopSelection} />
      <Stack.Screen name="Отделы" component={Products} />
      <Stack.Screen name="ProductSelection" component={ProductSelection} />
      <Stack.Screen name="ProductProfile" component={ProductProfile} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="AddressSelection" component={AddressSelectionScreen} />
     </Stack.Navigator>
   
  );
}

const styles = StyleSheet.create({
  label: {
  	paddingBottom: 10,
  },
})
