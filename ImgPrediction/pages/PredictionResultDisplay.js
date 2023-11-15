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
    height: 400,
    // backgroundColor: "aqua",
    top: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 15,
  },
  display: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.090)",
  },
  button: {
    position: "absolute",
    bottom: -70,
    flexDirection: "row",
    gap: 20,
  },
};

export default PredictionResultDisplay;
