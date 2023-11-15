// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RealTimeDisplay from "./pages/RealTimeDisplay";
import PredictionResultDisplay from "./pages/PredictionResultDisplay";
import PageHeader from "./components/PageHeader";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ header: () => <PageHeader title="Welcome" /> }}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Page1" component={RealTimeDisplay} />
        <Stack.Screen name="Page2" component={PredictionResultDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
