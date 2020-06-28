import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Home from '../Home/index';
import ShopPreview from '../../components/ShopPreview/index';
import ErrorMessage from '../../components/ErrorMessage/index';

const GET_SHOPS = gql`
query {
  shops {
    id
    shopName
    workingHours
    distanceTo
    categories
  }
}
`



export default function ShopSelection({ navigation }) {

  const { loading, error, data } = useQuery(GET_SHOPS);

  if (loading) return <ErrorMessage errorText={`Загрузка...`}/>;
  if (error) return <ErrorMessage errorText={`Произошла ошибка! ${error.message}`}/>;

  const shops = data.shops.map(shop => (
         <ShopPreview key={shop.id} categoryIds={shop.categories} 
         shopTitle={shop.shopName} distanceTo={shop.distanceTo} workingHours={shop.workingHours} />
        ))

  
  return (
  	<View style={styles.container}>
      <ScrollView>
      <View style={styles.scrollFrame}>
      {shops}
      </View>
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  	paddingTop: Constants.statusBarHeight,
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollFrame: {
  	flex: 1,
  	width: 350,
  	paddingBottom: 25,
  }
})
