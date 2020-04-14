import React, { useState } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import Card from "./src/components/Card/index.tsx";
import Home from "./src/views/Home/index.tsx";
import Products from "./src/views/Products/index.tsx";
import ShopSelection from './src/views/ShopSelection/index.tsx'
import Map from './src/views/Map/index.tsx';
import AddressSelectionScreen from './src/views/AddressSearch/index.tsx';
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
    <NavigationContainer>
     <Stack.Navigator initialRouteName="ShopSelection" headerMode="none">
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ShopSelection" component={ShopSelection} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="AddressSelection" component={AddressSelectionScreen} />
     </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}


