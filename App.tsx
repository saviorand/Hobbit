import React, { useState } from "react";
import Card from "./src/components/Card/index.tsx";
import Home from "./src/views/Home/index.tsx";
import Products from "./src/views/Products/index.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

