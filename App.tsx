import React, { useState } from "react";
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

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="ShopSelection" headerMode="none">
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ShopSelection" component={ShopSelection} />
      <Stack.Screen name="AddressSelection" component={AddressSelectionScreen} />

     </Stack.Navigator>
    </NavigationContainer>
  );
}

