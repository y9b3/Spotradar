import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConnexionScreen = ({ navigation }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Se connecter</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur ou adresse email"
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image 
              source={showPassword ? require('../../assets/oeil-ouvert.png') : require('../../assets/oeil-ferme.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.connectButton,
            (!identifier || !password) && styles.connectButtonDisabled
          ]}
          disabled={!identifier || !password}
        >
          <Text style={styles.connectButtonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 0,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 30,
    flex: 1,
    marginTop: 60,
    marginBottom: -50,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#666',
  },
  connectButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#666',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  connectButtonDisabled: {
    opacity: 0.5,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#8B5CF6',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default ConnexionScreen; 