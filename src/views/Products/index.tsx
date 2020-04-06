import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from "../../components/Card/index.tsx";

export default function Products() {
  return (
    <>
      <Card text="Bobik" />
    </>
  );
}

