import React from "react";
import { View, Text } from "react-native";

import HeaderStyles from "../styles/HeaderStyles";

const CustomHeader = ({ title }) => (
  <View style={HeaderStyles.header}>
    <Text>{title}</Text>
    <hr />
  </View>
);

export default CustomHeader;
