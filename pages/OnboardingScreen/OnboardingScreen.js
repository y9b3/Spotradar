import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserIcon from '../../components/UserIcon';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topSection}>
        <ImageBackground 
          source={require('../../assets/bording.png')} 
          style={styles.background}
        >
          <View style={styles.overlay} />
          <SafeAreaView style={styles.topContainer}>
            <Text style={styles.title}>Découvrez des activités{'\n'}près de chez vous...</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.bottomSection}>
        <SafeAreaView style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.signUpButton}
              onPress={() => navigation.navigate('SignUpScreen')}
            >
              <Image 
                source={require('../../assets/Spotlogo.png')} 
                style={styles.spotLogo}
              />
              <Text style={styles.signUpText}>S'inscrire sur Spot Radar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
              <UserIcon size={20} color="white" />
              <Text style={styles.loginText}> J'ai déjà un compte !</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
              À propos de Spot Radar · 
              <Text style={styles.link}> Notre plateforme</Text>
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  topSection: {
    flex: 1,
  },
  bottomSection: {
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 25,
    marginTop: -25,
    marginHorizontal: 0,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: '50%',
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    width: '100%',
    paddingTop: 0,
    paddingHorizontal: 5,
  },
  signUpButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  signUpText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  footerText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 20,
  },
  link: {
    textDecorationLine: 'underline',
  },
  spotLogo: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
    marginLeft: -4,
    marginVertical: -14,
  },
}); 