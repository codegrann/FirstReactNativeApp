// pages/Page1.js
import React from "react";
import { View, Text, Button } from "react-native";

const PredictionResultDisplay = () => {
  return (
    <View>
      <View>
        <Text>Real time display appears here</Text>
      </View>
      <Button title="ACTIVATE" />
    </View>
  );
};

const styles = {
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
};

export default PredictionResultDisplay;
