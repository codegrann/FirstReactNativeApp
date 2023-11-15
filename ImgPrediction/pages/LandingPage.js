// pages/LandingPage.js
import React from "react";
import { View, Text, Image } from "react-native";

const LandingPage = () => {
  return (
    <View>
      <Text>Hi Coder</Text>
      {/* Add your logo and other content here */}
      <Image source={require("../assets/logo.pmg")} />
    </View>
  );
};

export default LandingPage;
