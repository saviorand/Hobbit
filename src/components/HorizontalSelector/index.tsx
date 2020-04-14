import React, { useState } from "react";
import { Button, ScrollView, View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import SmallButton from '../SmallButton/index';

export default function HorizontalSelector (props) {
  
  const [textColor, setTextColor] = useState('black');
  const [bgColor, setBgColor] = useState('#fff');
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
     <SmallButton category={props.category} /> 
      <SmallButton category={'Яйца'} /> 
     <SmallButton category={'Сыр'} /> 
     <SmallButton category={'Честь'} /> 
     <SmallButton category={'Совесть'} /> 
     <SmallButton category={'Компот'} /> 

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
