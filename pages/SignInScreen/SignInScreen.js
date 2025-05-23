import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  Image as RNImage,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get('window');

const images = [
  require("../../assets/carrousel/im1.png"),
  require("../../assets/carrousel/im2.png"),
  require("../../assets/carrousel/im3.png"),
  require("../../assets/carrousel/im4.png"),
];

const texts = [
  "DÉCOUVRE\nLES MEILLEURS SPOT\nAUTOUR DE TOI.",
  "PARTAGE\nTON AVIS ET\nGUIDE LA COMMUNAUTÉ",
  "ACTIVE\nLE MODE ALÉATOIRE\nET LAISSE SPOT RADAR\nCHOISIR POUR TOI",
  "FILTRE\nLES SPOTS\nSELON TES ENVIES."
];

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

export default function SignInScreen({ navigation }) {
  // Carrousel logique (identique à OnboardingScreen)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const animCurrent = useRef(new Animated.Value(0)).current;
  const animNext = useRef(new Animated.Value(1)).current;
  const animTextCurrent = useRef(new Animated.Value(0)).current;
  const animTextNext = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;
  const intervalRef = useRef();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstRender(false);
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        Animated.parallel([
          Animated.timing(animCurrent, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(animNext, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(animTextCurrent, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(animTextNext, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
          setNextImageIndex((prev) => (prev + 1) % images.length);
          animCurrent.setValue(0);
          animNext.setValue(1);
          animTextCurrent.setValue(0);
          animTextNext.setValue(1);
          setIsTransitioning(false);
        });
      }, 10000);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animCurrent, animNext]);

  const getAnimatedStyleCurrent = () => ({
    transform: [
      {
        translateX: animCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120],
        }),
      },
      {
        translateY: animCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
      {
        rotate: animCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "30deg"],
        }),
      },
    ],
    opacity: animCurrent.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.2],
    }),
    position: "absolute",
    width: "100%",
    height: "100%",
  });

  const getAnimatedStyleNext = () => ({
    transform: [
      {
        translateX: animNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120],
        }),
      },
      {
        translateY: animNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120],
        }),
      },
      {
        rotate: animNext.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-30deg"],
        }),
      },
    ],
    opacity: animNext.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.2],
    }),
    position: "absolute",
    width: "100%",
    height: "100%",
  });

  const getAnimatedStyleTextCurrent = () => ({
    transform: [
      {
        translateX: animTextCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
      {
        translateY: animTextCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
      {
        rotate: animTextCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-30deg"],
        }),
      },
    ],
    opacity: animTextCurrent.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.2],
    }),
    position: "absolute",
    left: 20,
    right: 150,
    top: 120,
    zIndex: 2,
  });

  const getAnimatedStyleTextNext = () => ({
    transform: [
      {
        translateX: animTextNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
      {
        translateY: animTextNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120],
        }),
      },
      {
        rotate: animTextNext.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "30deg"],
        }),
      },
    ],
    opacity: animTextNext.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.2],
    }),
    position: "absolute",
    left: 20,
    right: 150,
    top: 120,
    zIndex: 2,
  });

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#3D5AFE", "#FF4E8E"]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <RNImage
          source={require("../../assets/background/fond.png")}
          style={styles.bgImage}
        />
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.circleImageContainer}>
              {isFirstRender ? (
                <Image
                  source={images[currentImageIndex]}
                  style={styles.circleImage}
                />
              ) : (
                <>
                  <Animated.View style={getAnimatedStyleCurrent()}>
                    <Image
                      source={images[currentImageIndex]}
                      style={styles.circleImage}
                    />
                  </Animated.View>
                  {isTransitioning && (
                    <Animated.View style={getAnimatedStyleNext()}>
                      <Image
                        source={images[nextImageIndex]}
                        style={styles.circleImage}
                      />
                    </Animated.View>
                  )}
                </>
              )}
            </View>
            {/* Texte animé synchronisé avec l'image */}
            {isFirstRender ? (
              <Animated.View style={styles.textContainer}>
                <Text style={styles.title}>{texts[currentImageIndex]}</Text>
              </Animated.View>
            ) : (
              <>
                {isTransitioning ? (
                  <>
                    <Animated.View style={getAnimatedStyleTextCurrent()}>
                      <Text style={styles.title}>{texts[currentImageIndex]}</Text>
                    </Animated.View>
                    <Animated.View style={getAnimatedStyleTextNext()}>
                      <Text style={styles.title}>{texts[nextImageIndex]}</Text>
                    </Animated.View>
                  </>
                ) : (
                  <Animated.View style={styles.textContainer}>
                    <Text style={styles.title}>{texts[currentImageIndex]}</Text>
                  </Animated.View>
                )}
              </>
            )}
            <Animated.View
              style={[
                styles.buttonContainerWrapper,
                {
                  transform: [{ translateY: slideAnim }]
                }
              ]}
            >
              <View style={styles.buttonContainer}>
        <TouchableOpacity
                  style={styles.appleButton}
                  onPress={() => {}}
        >
            <AppleIcon />
                  <Text style={styles.appleButtonText}>S'inscrire avec Apple</Text>
          </TouchableOpacity>
                <TouchableOpacity
                  style={styles.googleButton}
                  onPress={() => {}}
                >
            <GoogleIcon />
                  <Text style={styles.googleButtonText}>S'inscrire avec Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.emailButton}
            onPress={() => navigation && navigation.navigate("EmailSignUp")}
          >
            <Text style={styles.emailButtonText}>
                    S'inscrire avec une adresse e-mail
            </Text>
          </TouchableOpacity>
              </View>
            </Animated.View>
        </View>
      </SafeAreaView>
      </LinearGradient>
  </View>
);
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  background: { flex: 1, width: "100%", height: "100%" },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.3,
    zIndex: 0,
  },
  container: { flex: 1 },
  contentContainer: { flex: 1, position: "relative" },
  textContainer: {
    position: "absolute",
    top: 120,
    left: 20,
    right: 150,
    zIndex: 2,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30,
    width: "200%",
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
    paddingBottom: 40,
    alignItems: "center",
  },
  appleButton: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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
    padding: 16,
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
  signUpButton: {},
  loginButton: {},
});
