import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const AppleIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path fill="#fff" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25" />
  </Svg>
);

const GoogleIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      fill="#4285F4"
      d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
    />
    <Path
      fill="#34A853"
      d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
    />
    <Path
      fill="#FBBC05"
      d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
    />
    <Path
      fill="#EA4335"
      d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
    />
  </Svg>
);

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topSection}>
        <ImageBackground 
          source={require('../../assets/gameover.png')} 
          style={styles.background}
        >
          <View style={styles.overlay} />
          <SafeAreaView style={styles.topContainer}>
            <Text style={styles.title}>Filtrez les activités selon{'\n'}vos envie...</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.bottomSection}>
        <SafeAreaView style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Text style={styles.loginTitle}>Se connecter à Spot Radar</Text>
            <TouchableOpacity style={styles.appleButton}>
              <AppleIcon />
              <Text style={styles.appleButtonText}>Continuer avec Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
              <GoogleIcon />
              <Text style={styles.googleButtonText}>Continuer avec Google</Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.divider} />
            </View>
            <TouchableOpacity>
              <Text style={styles.emailText}>Continuer avec une adresse e-mail</Text>
            </TouchableOpacity>
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
  loginTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  appleButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  googleButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  appleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
  },
  emailText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
}); 