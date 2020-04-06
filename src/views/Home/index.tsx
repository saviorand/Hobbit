import React, { useState } from "react";
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Products from "../Products/index.tsx";
import HomeScreen from "../../components/HomeScreen/index.tsx";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
  <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Products" component={Products} options={{ title: 'Products' }} />
  </Tab.Navigator>
   
  );
}
