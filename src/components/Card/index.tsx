import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Card(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.contentContainer}>
      <Text>
        I am {props.text}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    height: 50,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: 'skyblue',
  },
})
