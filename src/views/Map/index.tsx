import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ShopSelection from '../ShopSelection/index.tsx'

export default function Map({ navigation }) {
  return (
    <View>
      <Text>Please specify your address</Text>
      <Button
        title="Specify my address"
        onPress={() => navigation.navigate('ShopSelection')}
      />
    </View>
  );
}

