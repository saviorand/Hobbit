import React, { useState } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Provider as StoreProvider } from 'react-redux';
import store from './src/models/store';
import { Button, View, Text, StyleSheet } from 'react-native';

import Settings from "./src/views/Settings/index";
import Card from "./src/components/Card/index";
import Home from "./src/views/Home/index";
import Products from "./src/views/Products/index";
import ShopSelection from './src/views/ShopSelection/index';
import ProductSelection from './src/views/ProductSelection/index';
//import Map from './src/views/Map/index';
import AddressSelectionScreen from './src/views/AddressSearch/index';
import ProductProfile from './src/views/ProductProfile/index';
import Basket from './src/views/Basket/index';

import FocusedTint from "./src/components/FocusedButtonTint/index";
import SettingsIcon from "./src/components/SettingsButton/index";
import BasketIcon from "./src/components/BasketButton/index";
import ShopIcon from "./src/components/ShopButton/index";

import { MapView, Location, Permissions } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const client = new ApolloClient({
	uri: 'http://192.168.0.122:4000/graphql',
});
//<Stack.Screen name="Map" component={Map} />

export default function App() {
  return (
    <ApolloProvider client={client}>
    <StoreProvider store={store}>
    <NavigationContainer>
     <Tab.Navigator  
  tabBarOptions={{
    style: {minHeight: 70},
    activeBackgroundColor: '#fff8f7'

  }} 
  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Корзина') {
              return <BasketIcon />;
            } else if (route.name === 'Информация') {
               return <SettingsIcon />;
            } else if (route.name === 'Продукты') {
              return <ShopIcon />
            }

          },
          tabBarLabel: () => {
            if (route.name === 'Корзина') {
              return null;
            } else if (route.name === 'Информация') {
              return <Text style={styles.label}>Информация</Text>
            } else if (route.name === 'Продукты') {
              return <Text style={styles.label}>Продукты</Text>
            }
          }
        })}>
       <Tab.Screen name="Продукты" component={Home} />
       <Tab.Screen name="Корзина" component={Basket} />
       <Tab.Screen name="Информация" component={Settings} />
  </Tab.Navigator>
    </NavigationContainer>
    </StoreProvider>
    </ApolloProvider>
  );
}



const styles = StyleSheet.create({
  label: {
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
})
