import React, { useState } from "react";
import { ScrollView, View, SectionList, StyleSheet, Text } from "react-native";

import Constants from 'expo-constants';


export default function MoreInfo (props) {

  const [displayModeContents, setDisplayModeContents] = useState('none');
  const [displayModeAbout, setDisplayModeAbout] = useState('none');
  
  return (
      <ScrollView>
      <Text style={styles.header} onPress={() => {
        (displayModeContents === 'none') ? setDisplayModeContents('flex') 
        : setDisplayModeContents('none');
        }}>{'Состав и КБЖУ'}</Text>
      <View style={[styles.item, {
       display: displayModeContents,
      }]}>
       <Text style={styles.title}>{'Lorem'}</Text>
      </View>
      <Text style={styles.header} onPress={() => {
        (displayModeAbout === 'none') ? setDisplayModeAbout('flex') 
        : setDisplayModeAbout('none');
        }}>{'Информация'}</Text>
      <View style={[styles.item, {
       display: displayModeAbout,
      }]}>
       <Text style={styles.title}>{'Lipsum'}</Text>
      </View>
    </ScrollView>
        );
};
      

const styles = StyleSheet.create({ 
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 21,
    backgroundColor: "#FCFCFC",
    color: '#FC8D24',
    padding: 20,

  },
  title: {
    fontSize: 21
  }
});