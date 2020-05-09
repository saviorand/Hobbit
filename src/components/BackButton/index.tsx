import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";


function BackButton(props) {
  return (
    <View style={styles.buttonContainer}>
    <Svg width={21} height={16} viewBox="0 0 21 16" fill="none" {...props}>
      <Path
        d="M20.586 6.962H4.744l5.748-5.494L8.957 0 .586 8l8.37 8 1.537-1.468-5.75-5.494h15.843V6.962z"
        fill="#FC8D24"
      />
    </Svg>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    minHeight: 80,
    minWidth: 50,
    justifyContent: 'center',
  }});

export default BackButton

