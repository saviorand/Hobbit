import React, { useState } from "react";
import Card from "./src/components/Card/index.tsx";
import Home from "./src/views/Home/index.tsx";
import Products from "./src/views/Products/index.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products} options={{ title: 'Products' }} />
     </Tab.Navigator>
    </NavigationContainer>
  );
}

