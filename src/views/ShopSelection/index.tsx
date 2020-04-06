import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/index.tsx'

export default function ShopSelection({ navigation }) {
  return (
    <View>
      <Text>Select a shop:</Text>
      <Button
        title="Lenta"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

