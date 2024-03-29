// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RealTimeDisplay from "./pages/RealTimeDisplay";
import PredictionResultDisplay from "./pages/PredictionResultDisplay";
// import PageHeader from "./components/PageHeader";
// (header: () => <PageHeader title="Welcome" /> })

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Real Time"
          component={RealTimeDisplay}
          options={{ title: "Real Time Display" }}
        />
        <Stack.Screen
          name="Image Prediction"
          component={PredictionResultDisplay}
          options={{ title: "Image Prediction" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
