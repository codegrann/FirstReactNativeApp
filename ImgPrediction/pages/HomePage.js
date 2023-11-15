// pages/HomePage.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>What do you to do?</Text>
      {/* Add your logo and other content here */}
      <Button title="Real Time" onPress={() => navigation.navigate("Page1")} />
      <Button
        title="Image Prediction"
        onPress={() => navigation.navigate("Page2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "aqua",
    width: "100%",
    height: "50%",
    top: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTop: "2px solid red",
    // fontSize: 32,
  },
});

export default HomePage;
