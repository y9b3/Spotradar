import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./pages/OnboardingScreen/OnboardingScreen";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignInScreen from "./pages/SignInScreen/SignInScreen";
import EmailSignUp from "./pages/SignInScreen/EmailSignUp";
import ConnexionScreen from "./pages/LoginScreen/ConnexionScreen";
import DashBord from "./pages/DashBoard/DashBord";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 secondes de délai
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="DashBord" component={DashBord} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
