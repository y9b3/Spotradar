import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const AppleIcon = ({ size = 24, color = '#fff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
    />
  </Svg>
);

const GoogleIcon = ({ size = 24 }) => (
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

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/page1.png')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity 
            style={styles.ignoreButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.ignoreText}>Ignorer</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Le hasard choisira votre{'\n'}prochaine aventure...</Text>

          <View style={styles.bottomCard}>
            <Text style={styles.signUpTitle}>S'inscrire sur Spot Radar</Text>

            <TouchableOpacity style={styles.appleButton}>
              <AppleIcon style={styles.buttonIcon} />
              <Text style={styles.appleButtonText}>Continuer avec Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
              <GoogleIcon style={styles.buttonIcon} />
              <Text style={styles.googleButtonText}>Continuer avec Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.emailButton}>
              <Text style={styles.emailButtonText}>
                Continuer avec une adresse e-mail
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  ignoreButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  ignoreText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
    lineHeight: 32,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingTop: 30,
  },
  signUpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonIcon: {
    marginRight: 20,
    width: 20,
    height: 20,
  },
  appleButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 48,
  },
  appleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  googleButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 48,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  emailButton: {
    padding: 16,
    marginTop: 8,
  },
  emailButtonText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen; 