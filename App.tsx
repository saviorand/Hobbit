import React, { useState } from "react";
import ApolloClient,{ InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Provider as StoreProvider } from 'react-redux';
import store from './src/models/store';
import { Button, View, Text, StyleSheet } from 'react-native';

import { useLinking, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Linking } from "expo";

//import HomeStack from './src/views/HomeStack/index';
import Settings from "./src/views/Settings/index";
import Home from "./src/views/Home/index";
import Basket from './src/views/Basket/index';

import SettingsIcon from "./src/components/SettingsButton/index";
import BasketIcon from "./src/components/BasketButton/index";
import ShopIcon from "./src/components/ShopButton/index";
import ThankYou from './src/views/ThankYou/index';
import Products from "./src/views/Products/index";
import ShopSelection from './src/views/ShopSelection/index';
import ProductSelection from './src/views/ProductSelection/index';
import ProductProfile from './src/views/ProductProfile/index';
import PaymentWV from './src/views/PaymentWV/index';
//import AddressSelectionScreen from './src/views/AddressSearch/index';
//import Map from './src/views/Map/index';
//import { MapView, Location, Permissions } from 'expo';
//<Stack.Screen name="Map" component={Map} />

const client = new ApolloClient({
  uri: 'http://192.168.0.122:4000/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImEyc3Zpb3JAZ21haWwuY29tIiwiaWQiOiJkOWEyODVhNi1kMjMwLTQzYjEtYTIxNS1mZTBlMTA2MzE1ZTIiLCJpYXQiOjE1OTA5NDMyNTF9.BxlLrA77okOaN8wzad83YpsQb0U12r2hisvj8I2ybN0', //Your Auth token extraction logic
      },
    });
  },
});

/*const client = new ApolloClient({
	uri: 'http://192.168.0.122:4000/graphql',
});*/

const prefix = Linking.makeUrl("/");
const config = {
	Home: 'home',
	ShopSelection: 'shop-selection',
	Products: 'product-categories',
	ProductSelection: 'product-selection',
	ProductProfile: 'product-profile',
	Basket: 'basket',
	PaymentWV: 'payment',
	ThankYou: {
    path: 'thank-you/:id',
    parse: {
      id: String,
    }
  },
	Settings: 'settings'
};


export default function App() {

  const ref = React.useRef();

  const { getInitialState } = useLinking(ref, {
    prefixes: [prefix],
    config
  });
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

   const Tab = createBottomTabNavigator();

   React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
    <StoreProvider store={store}>
    <NavigationContainer initialState={initialState} ref={ref}>
     <Tab.Navigator  
  tabBarOptions={{
    style: {minHeight: 70},
    activeBackgroundColor: '#fff8f7'

  }} 
  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Basket') {
              return <BasketIcon />;
            } else if (route.name === 'Settings') {
               return <SettingsIcon />;
            } else if (route.name === 'Home') {
              return <ShopIcon />
            }

          },
          tabBarLabel: () => {
            if (route.name === 'Basket') {
              return null;
            } else if (route.name === 'Settings') {
              return <Text style={styles.label}>Информация</Text>
            } else if (route.name === 'Home') {
              return <Text style={styles.label}>Продукты</Text>
            }
          }
        })}>
       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Basket" component={Basket} />
       <Tab.Screen name="Settings" component={Settings} />
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