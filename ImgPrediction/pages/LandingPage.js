// pages/LandingPage.js
import React from "react";
import { View, Text, Image, Button } from "react-native";

const LandingPage = () => {
  return (
    <View>
      <Text>Hi Coder</Text>
      {/* Add your logo and other content here */}
      <Image
        source={require("../assets/logo.png")}
        style={{
          position: "absolute",
          top: "6rem",
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
      <Button>
        <Text>Start</Text>
      </Button>
    </View>
  );
};

export default LandingPage;
