import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { Linking } from "expo";

//import { createStackNavigator } from '@react-navigation/stack';
//import { gql } from "apollo-boost";
//import { useQuery } from '@apollo/react-hooks';
//import { useSelector, useDispatch } from 'react-redux';

import ScreenTitle from '../../components/ScreenTitle/index';
import PreferencesButton from '../../components/PreferencesButton/index';

export default function Settings({ navigation }) {
  
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Настройки'}/>
      <View style={styles.settingsContainer}>
      <PreferencesButton onPress={() => Linking.openURL(Linking.makeUrl('/home/thankyou/123'))} buttonText={"Сказать спасибо"} />
      <PreferencesButton onPress={() => navigation.navigate('TermsView')} buttonText={"Пользовательское соглашение"} />
      <PreferencesButton onPress={() => navigation.navigate('Home')} buttonText={"Контакты"} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  settingsButton:  {
    height: 75,
    borderTopColor: 'rgba(227, 82, 5, 0.6)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(227, 82, 5, 0.6)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginTop: 0,
  },
  settingsButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
  settingsContainer: {
    width: '100%',
    minHeight: 350,
    justifyContent: 'space-evenly'
  }
})
