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

export default function OnboardingScreen({ navigation }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Animation pour l'image courante (sortie)
  const animCurrent = useRef(new Animated.Value(0)).current;
  // Animation pour l'image suivante (entrée)
  const animNext = useRef(new Animated.Value(1)).current;

  // Animation du composant blanc
  const slideAnim = useRef(new Animated.Value(100)).current;

  // Animation pour le texte courant (sortie)
  const animTextCurrent = useRef(new Animated.Value(0)).current;
  // Animation pour le texte suivant (entrée)
  const animTextNext = useRef(new Animated.Value(1)).current;

  // Utiliser un ref pour stocker l'intervalle
  const intervalRef = useRef();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    // On attend 10s avant de lancer la première animation
    const timeout = setTimeout(() => {
      setIsFirstRender(false);
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        Animated.parallel([
          // Image courante sort vers le haut/droite (rotation + translation)
          Animated.timing(animCurrent, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          // Image suivante entre par le bas/droite (rotation + translation)
          Animated.timing(animNext, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
          // Texte courant sort vers le haut/gauche (rotation + translation)
          Animated.timing(animTextCurrent, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          // Texte suivant entre par le bas/gauche (rotation + translation)
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

  // Style animé pour l'image courante (sortie circulaire)
  const getAnimatedStyleCurrent = () => ({
    transform: [
      {
        translateX: animCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120], // vers la droite
        }),
      },
      {
        translateY: animCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120], // vers le haut
        }),
      },
      {
        rotate: animCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "30deg"], // petit effet de rotation
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

  // Style animé pour l'image suivante (entrée circulaire)
  const getAnimatedStyleNext = () => ({
    transform: [
      {
        translateX: animNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120], // arrive de la droite
        }),
      },
      {
        translateY: animNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120], // arrive du bas
        }),
      },
      {
        rotate: animNext.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-30deg"], // petit effet de rotation inverse
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

  // Style animé pour le texte courant (sortie circulaire)
  const getAnimatedStyleTextCurrent = () => ({
    transform: [
      {
        translateX: animTextCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120], // vers la gauche
        }),
      },
      {
        translateY: animTextCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120], // vers le haut
        }),
      },
      {
        rotate: animTextCurrent.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-30deg"], // petit effet de rotation
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

  // Style animé pour le texte suivant (entrée circulaire)
  const getAnimatedStyleTextNext = () => ({
    transform: [
      {
        translateX: animTextNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120], // arrive de la gauche
        }),
      },
      {
        translateY: animTextNext.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120], // arrive du bas
        }),
      },
      {
        rotate: animTextNext.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "30deg"], // petit effet de rotation inverse
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
            <View style={styles.textContainer}>
            </View>
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
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.3,
    zIndex: 0,
  },
});
