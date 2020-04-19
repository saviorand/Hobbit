import React, { useState } from "react";
import { Button, ScrollView, View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import SmallButton from '../SmallButton/index';

export default function HorizontalSelector (props) {
  
  const navigation = useNavigation();


  const horizontalCategories = props.categories.map(category => (
         <SmallButton category={category.categoryNames} 
         key={category.categoryIds} section={category.categoryIds}
         onSubSectionSelect={props.subSect} 
         /> 
    ))
     

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
    contentContainerStyle={styles.contentContainer}>
    {horizontalCategories}
    </ScrollView>
  );
};
      

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 15,
    height: 60,
  },
})
