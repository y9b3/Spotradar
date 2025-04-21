import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = () => {
  const signal1Anim = useRef(new Animated.Value(0)).current;
  const signal2Anim = useRef(new Animated.Value(0)).current;
  const signal3Anim = useRef(new Animated.Value(0)).current;
  const signal4Anim = useRef(new Animated.Value(0)).current;
  const signal5Anim = useRef(new Animated.Value(0)).current;
  const signal6Anim = useRef(new Animated.Value(0)).current;
  const loopCountRef = useRef(0);

  useEffect(() => {
    const animateSignals = () => {
      // Reset all signals
      signal1Anim.setValue(0);
      signal2Anim.setValue(0);
      signal3Anim.setValue(0);
      signal4Anim.setValue(0);
      signal5Anim.setValue(0);
      signal6Anim.setValue(0);

      Animated.sequence([
        // Apparition séquentielle (du plus petit au plus grand)
        Animated.timing(signal1Anim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal2Anim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal3Anim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal4Anim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal5Anim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal6Anim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        // Pause avant de commencer la disparition
        Animated.delay(500),
        // Disparition séquentielle (du plus grand au plus petit)
        Animated.timing(signal6Anim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal5Anim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal4Anim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal3Anim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal2Anim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(signal1Anim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        // Courte pause avant la prochaine boucle
        Animated.delay(200),
      ]).start(() => {
        loopCountRef.current += 1;
        if (loopCountRef.current < 3) {
          // Continue l'animation pour les 3 premières boucles
          animateSignals();
        } else {
          // Après 3 boucles, fait une pause plus longue et recommence
          loopCountRef.current = 0;
          setTimeout(animateSignals, 1500);
        }
      });
    };

    animateSignals();

    return () => {
      // Cleanup lors du démontage du composant
      loopCountRef.current = 0;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Spotlogo_sans.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/Spotlogo_signal1.png')}
        style={[
          styles.signal,
          {
            opacity: signal1Anim,
          },
        ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/Spotlogo_signal2.png')}
        style={[
          styles.signal,
          {
            opacity: signal2Anim,
          },
        ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/Spotlogo_signal3bis.png')}
        style={[
          styles.signal,
          {
            opacity: signal3Anim,
          },
        ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/Spotlogo_signal4.png')}
        style={[
          styles.signal,
          {
            opacity: signal4Anim,
          },
        ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/Spotlogo_signal5.png')}
        style={[
          styles.signal,
          {
            opacity: signal5Anim,
          },
        ]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/Spotlogo_signal6.png')}
        style={[
          styles.signal,
          {
            opacity: signal6Anim,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    width: 400,
    height: 400,
    tintColor: '#FFFFFF',
    position: 'absolute',
  },
  signal: {
    width: 400,
    height: 400,
    tintColor: '#FFFFFF',
    position: 'absolute',
  },
});

export default SplashScreen; 