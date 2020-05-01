import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
//import { createStackNavigator } from '@react-navigation/stack';
//import { gql } from "apollo-boost";
//import { useQuery } from '@apollo/react-hooks';
//import { useSelector, useDispatch } from 'react-redux';

import ScreenTitle from '../../components/ScreenTitle/index';

export default function Settings({ navigation }) {

  //const items = useSelector(state => state);
  //const dispatch = useDispatch();
  
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Настройки'}/>
      <View>
      <Text>Настройки здесь</Text>
      </View>
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
})
