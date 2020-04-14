import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Home from '../Home/index';
import ShopPreview from '../../components/ShopPreview/index';
import ScreenTitle from '../../components/ScreenTitle/index';

const GET_SHOPS = gql`
query {
  shops {
    id
    shopName
    workingHours
    distanceTo
  }
}
`



export default function ShopSelection({ navigation }) {

  const { loading, error, data } = useQuery(GET_SHOPS);

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const shops = data.shops.map(shop => (
         <ShopPreview key={shop.id} shopid={shop.id} shopTitle={shop.shopName} distanceTo={shop.distanceTo} workingHours={shop.workingHours} />
        ))

  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Магазины, до которых мы сможем дотянуться'}/>
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
