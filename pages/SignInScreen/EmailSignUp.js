import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmailSignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Inscription</Text>

      <View style={styles.whiteContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#666"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholderTextColor="#666"
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

          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#666"
          />

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setReceiveOffers(!receiveOffers)}
            >
              {receiveOffers && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              Je souhaite recevoir par e-mail des offres personnalisées et les dernières mises à jour de Spot Radar
            </Text>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setAcceptTerms(!acceptTerms)}
            >
              {acceptTerms && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              En t'inscrivant, tu confirmes que tu acceptes les{' '}
              <Text style={styles.link}>Termes et Conditions</Text> de Spot Radar, avoir lu la politique de Confidentialité et avoir au moins 18 ans
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.signUpButton,
              (!username || !password || !email || !acceptTerms) && styles.signUpButtonDisabled
            ]}
            disabled={!username || !password || !email || !acceptTerms}
          >
            <Text style={styles.signUpButtonText}>S'inscrire</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpButtonText}>Un problème ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -5,
    marginBottom: 30,
    color: '#fff',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: -50,
  },
  form: {
    flex: 1,
    width: '100%',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#000',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  link: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#666',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonDisabled: {
    opacity: 0.5,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  helpButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  helpButtonText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default EmailSignUp; 