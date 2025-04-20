import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

// Préchargement de l'image
const gameOverImage = require("../../assets/gameover.png");
Image.prefetch(Image.resolveAssetSource(gameOverImage).uri);

const AppleIcon = ({ size = 20, color = "#fff" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
    />
  </Svg>
);

const GoogleIcon = ({ size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 128 128">
    <Path
      fill="#e33629"
      d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
    />
    <Path
      fill="#f8bd00"
      d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
    />
    <Path
      fill="#587dbd"
      d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
    />
    <Path
      fill="#319f43"
      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
    />
  </Svg>
);

const LoginScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <ImageBackground
      source={gameOverImage}
      style={styles.backgroundImage}
      imageStyle={{ transform: [{ translateY: -220 }] }}
      resizeMode="cover"
      loadingIndicatorSource={gameOverImage}
      defaultSource={gameOverImage}
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={styles.ignoreButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.ignoreText}>Ignorer</Text>
        </TouchableOpacity>
        <View style={styles.topTextContainer}>
          <Text style={styles.title}>
            Filtrez les activités selon{"\n"}vos envie...
          </Text>
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.signUpTitle}>Se connecter à Spot Radar</Text>
          <TouchableOpacity style={styles.appleButton}>
            <AppleIcon />
            <Text style={styles.appleButtonText}>Continuer avec Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <GoogleIcon />
            <Text style={styles.googleButtonText}>Continuer avec Google</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>ou</Text>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity
            style={styles.emailButton}
            onPress={() => navigation && navigation.navigate("Connexion")}
          >
            <Text style={styles.emailButtonText}>
              Continuer avec une adresse e-mail
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#000', // Ajout d'une couleur de fond pendant le chargement
  },
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    zIndex: 2,
  },
  ignoreButton: {
    position: "absolute",
    top: 70,
    right: 20,
    zIndex: 1,
  },
  ignoreText: {
    color: "white",
    fontSize: 16,
    opacity: "0.6",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // ← ajuste l'opacité ici (0.3 à 0.6 en général)
    zIndex: 1,
  },
  topTextContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 210,
  },
  title: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 36,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  bottomCard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
    paddingTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    height: "45%",
  },
  signUpTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  appleButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: 56,
  },
  appleButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
  },
  googleButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: 56,
  },
  googleButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  orText: {
    marginHorizontal: 10,
    color: "#999",
    fontSize: 14,
  },
  emailButton: {
    padding: 16,
    marginTop: 8,
    width: "100%",
  },
  emailButtonText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
