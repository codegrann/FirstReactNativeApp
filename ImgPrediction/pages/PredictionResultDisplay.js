// pages/Page1.js
import React from "react";
import { View, Text, Button } from "react-native";

const PredictionResultDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text>This is the image view</Text>
      </View>
      <View style={styles.display}>
        <Text>Prediction results appear here</Text>
      </View>

      <View style={styles.button}>
        <Button title="UPLOAD" />
        <Button title="CAPTURE" />
      </View>
    </View>
  );
};

const styles = {
  container: {
    height: 230,
    // backgroundColor: "aqua",
    top: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderTop: "2px solid red",
    // fontSize: 32,
  },
  display: {
    // width: "100%",
    // top: 50,
    // height: 170,
    // padding: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.090)",
    // height: "150%",
    // border: "1px solid blue",
  },
  button: {
    // position: "absolute",
    // bottom: -200,
  },
};

export default PredictionResultDisplay;
