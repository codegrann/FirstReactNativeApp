// pages/LandingPage.js
import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome Aboard</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Button
        title="Start"
        style={styles.button}
        onPress={() => navigation.navigate("HomePage")}
      />
      {/* <TouchableOpacity style={styles.button}> */}
      {/* <Text style={styles.button}>Start</Text> */}
      {/* </TouchableOpacity> */}
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
  logo: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    // borderRadius: "50%",
  },
  button: {
    width: 70,
    // padding: "30px",
    backgroundColor: "blue",
  },
});

export default LandingPage;
