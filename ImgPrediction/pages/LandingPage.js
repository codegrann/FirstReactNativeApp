// pages/LandingPage.js
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Aboard</Text>
      {/* Add your logo and other content here */}
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Button title="Start" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  logo: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
  button: {},
});

export default LandingPage;
