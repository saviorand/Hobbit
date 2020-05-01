import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ShopSelection from "../ShopSelection/index";
import Basket from "../Basket/index";
import Settings from "../Settings/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FocusedTint from "../../components/FocusedButtonTint/index";
import SettingsIcon from "../../components/SettingsButton/index";
import BasketIcon from "../../components/BasketButton/index";
import ShopIcon from "../../components/ShopButton/index";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
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
       <Tab.Screen name="Продукты" component={ShopSelection} />
       <Tab.Screen name="Корзина" component={Basket} />
       <Tab.Screen name="Информация" component={Settings} />
  </Tab.Navigator>
   
  );
}

const styles = StyleSheet.create({
  label: {
  	paddingBottom: 10,
  },
})
