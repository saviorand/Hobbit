import React, { useState } from "react";
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from "../../components/Card/index.tsx";

export default function Home({ navigation }) {
  return (
    <View>
      <Card text="Munkustrap" />
      <Card text="Spot" />
            <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}

