import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Animated } from 'react-native';
import OnboardingScreen from "./pages/OnboardingScreen/OnboardingScreen";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignInScreen from "./pages/SignInScreen/SignInScreen";
import EmailSignUp from "./pages/SignInScreen/EmailSignUp";
import ConnexionScreen from "./pages/LoginScreen/ConnexionScreen";
import FeedScreen from "./pages/DashBoard/FeedScreen";
import MapScreen from "./pages/Map/MapScreen";

const Stack = createNativeStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

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
          cardStyleInterpolator: forFade,
          cardStyle: { backgroundColor: 'transparent' },
          presentation: 'transparentModal',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen 
          name="Map" 
          component={MapScreen}
          options={{
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                  opacity: current.progress,
                },
                overlayStyle: {
                  opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                  }),
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
