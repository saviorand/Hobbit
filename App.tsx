import React, { useState } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Provider as StoreProvider } from 'react-redux';
import store from './src/models/store';

import Card from "./src/components/Card/index";
import Home from "./src/views/Home/index";
import Products from "./src/views/Products/index";
import ShopSelection from './src/views/ShopSelection/index';
import ProductSelection from './src/views/ProductSelection/index';
import Map from './src/views/Map/index';
import AddressSelectionScreen from './src/views/AddressSearch/index';
import ProductProfile from './src/views/ProductProfile/index';
import Basket from './src/views/Basket/index';

import { MapView, Location, Permissions } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const client = new ApolloClient({
	uri: 'http://192.168.0.122:4000/graphql',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <StoreProvider store={store}>
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ShopSelection" component={ShopSelection} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductSelection" component={ProductSelection} />
      <Stack.Screen name="ProductProfile" component={ProductProfile} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="AddressSelection" component={AddressSelectionScreen} />
     </Stack.Navigator>
    </NavigationContainer>
    </StoreProvider>
    </ApolloProvider>
  );
}


