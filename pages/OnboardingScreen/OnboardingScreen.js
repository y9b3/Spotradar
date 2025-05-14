import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#3D5AFE", "#FF4E8E"]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                DÉCOUVRE{"\n"}
                LES MEILLEURS SPOT{"\n"}
                AUTOUR DE TOI.
              </Text>
            </View>
            
            <View style={styles.circleImageContainer}>
              <Image
                source={require("../../assets/poker.png")}
                style={styles.circleImage}
              />
            </View>
            
            <View style={styles.buttonContainerWrapper}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={() => navigation.navigate("SignInScreen")}
                >
                  <Image
                    source={require("../../assets/icon/addcont.png")}
                    style={styles.buttonIcon}
                  />
                  <Text style={styles.signUpText}>S'inscrire sur Spot Radar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Image
                    source={require("../../assets/icon/connect.png")}
                    style={styles.buttonIcon}
                  />
                  <Text style={styles.loginText}>Se connecter à Spot Radar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    top: 140,
    left: 20,
    right: 150,
    zIndex: 2,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30,
    width:"200%",
  },
  circleImageContainer: {
    position: "absolute",
    top: 90,
    right: -120,
    width: 320,
    height: 320,
    borderRadius: 160,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  circleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonContainerWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  buttonContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 80,
  },
  signUpButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "white",
  },
  signUpText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
});
