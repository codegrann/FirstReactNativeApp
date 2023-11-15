// pages/HomePage.js
import React from "react";
import { View, Text, Button } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      {/* Add your logo and other content here */}
      <Button
        title="Go to Page 1"
        onPress={() => navigation.navigate("Page1")}
      />
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate("Page2")}
      />
    </View>
  );
};

export default HomePage;
