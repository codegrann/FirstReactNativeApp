// pages/LandingPage.js
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome Aboard</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Button title="Start" onPress={() => navigation.navigate("HomePage")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aqua",
    width: "100%",
    height: "50%",
    top: "20%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTop: "2px solid red",
    // fontSize: 32,
  },
  logo: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
  button: {},
});

export default LandingPage;
