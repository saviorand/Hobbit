import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/index';
import ShopPreview from '../../components/ShopPreview/index';
import ScreenTitle from '../../components/ScreenTitle/index';


export default function ShopSelection({ navigation }) {
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Магазины, до которых мы сможем дотянуться'}/>
      <ScrollView>
      <View style={styles.scrollFrame}>
      <ShopPreview shopTitle={'Лента'} distanceTo={'2.4 километра'} workingHours={'Круглосуточно'} />
      <ShopPreview shopTitle={'Лента'} distanceTo={'2.4 километра'} workingHours={'Круглосуточно'} />
      <ShopPreview shopTitle={'Лента'} distanceTo={'2.4 километра'} workingHours={'Круглосуточно'} />
      <ShopPreview shopTitle={'Лента'} distanceTo={'2.4 километра'} workingHours={'Круглосуточно'} />
      <ShopPreview shopTitle={'Лента'} distanceTo={'2.4 километра'} workingHours={'Круглосуточно'} />
      <ShopPreview shopTitle={'Лента'} distanceTo={'2.4 километра'} workingHours={'Круглосуточно'} />
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
