import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function ConnexionScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (identifier.trim() === "" || password.trim() === "") {
      console.log("Veuillez remplir tous les champs.");
      return;
    }
    navigation.navigate("Feed");
  };

  return (
    <LinearGradient
      colors={["#3D5AFE", "#FF4E8E"]}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Text style={styles.header}>Se connecter</Text>
          <View style={styles.formContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Nom d'utilisateur"
              value={identifier}
              onChangeText={setIdentifier}
              autoCapitalize="none"
              placeholderTextColor="#B0B0B0"
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholderTextColor="#B0B0B0"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={
                  showPassword
                    ? require("../../assets/oeil-ouvert.png")
                    : require("../../assets/oeil-ferme.png")
                }
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.connexionButton} onPress={handleLogin}>
              <Text style={styles.connexionButtonText}>CONNEXION</Text>
              <Image
                source={require("../../assets/icon/log.png")}
                style={styles.connexionIcon}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
    letterSpacing: 1,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 40,
    marginHorizontal: 16,
    marginTop: 30,
    padding: 28,
    paddingBottom: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 24,
    elevation: 8,
    minHeight: 350,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 18,
    color: "#222",
    marginBottom: 36,
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  connexionButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 14,
    position: "absolute",
    right: 18,
    bottom: 18,
    opacity: 0.8,
    zIndex: 2,
  },
  connexionButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
    letterSpacing: 1,
  },
  connexionIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "white",
  },
  backButton: {
    position: "absolute",
    left: 18,
    bottom: 18,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  backButtonText: {
    fontSize: 32,
    color: "#888",
    fontWeight: "bold",
  },
  eyeButton: {
    position: "absolute",
    right: 18,
    top: 110,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: "#999",
  },
});
