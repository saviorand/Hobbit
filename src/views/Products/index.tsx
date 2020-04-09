import React, { useState } from "react";
import { Button, Text, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenTitle from '../../components/ScreenTitle/index';
import Card from "../../components/Card/index.tsx";

export default function Products() {
  return (
  	<View style={styles.container}>
      <ScreenTitle screenTitle={'Что возьмём?'} />
       <FlatList
          data={[
            {key: 'Молочные продукты и яйца'},
            {key: 'Мясо'},
            {key: 'Колбаса'},
          ]}
          renderItem={({item}) => <Card text={item.key} />}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: Constants.statusBarHeight,
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})