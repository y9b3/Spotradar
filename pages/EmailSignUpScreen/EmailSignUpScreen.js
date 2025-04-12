import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const EmailSignUpScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewsChecked, setIsNewsChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inscription</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.separator} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            placeholderTextColor="#999"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Mot de passe"
              placeholderTextColor="#999"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Ionicons 
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                size={24} 
                color="#999"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <Checkbox
              value={isNewsChecked}
              onValueChange={setIsNewsChecked}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>
              Je souhaite recevoir par e-mail des offres personnalisées et les dernières mises à jour de Spot Radar
            </Text>
          </View>

          <View style={styles.checkboxRow}>
            <Checkbox
              value={isTermsChecked}
              onValueChange={setIsTermsChecked}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>
              En t'inscrivant, tu confirmes que tu acceptes les{' '}
              <Text style={styles.link}>Termes & Conditions</Text> de Spot Radar, avoir lu la politique de Confidentialité et avoir au moins 18 ans.
            </Text>
          </View>
        </View>

        <TouchableOpacity 
          style={[
            styles.signUpButton,
            (!isTermsChecked) && styles.signUpButtonDisabled
          ]}
          disabled={!isTermsChecked}
        >
          <Text style={styles.signUpButtonText}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpButtonText}>Un problème ?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
  checkboxContainer: {
    marginTop: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
    marginTop: 3,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  link: {
    color: '#666',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#000',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 30,
    alignItems: 'center',
  },
  signUpButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  helpButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  helpButtonText: {
    color: '#8E8E93',
    fontSize: 14,
  },
});

export default EmailSignUpScreen; 