import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#8A63FF', '#FFFFFF']}
      locations={[0.44, 1]}
      style={styles.container}
    >
      <Image
        source={require('../assets/Spotlogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>SpotRadar</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: -15,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
  },
});

export default SplashScreen; 