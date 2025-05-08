import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  return (
    <ImageBackground
      source={require('../assets/Screen.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login here</Text>
        <Text style={styles.subtitle}>
          Welcome back you've been missed!
        </Text>
        
        <TextInput
          style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
          placeholder="Email"
          placeholderTextColor="#626262"
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
        />
        <TextInput
          style={[styles.input, focusedInput === 'password' && styles.inputFocused]}
          placeholder="Password"
          placeholderTextColor="#626262"
          secureTextEntry
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput(null)}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createAccount}>Create new account</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="google" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="apple1" size={24} color="#000" />
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'Poppins_700Bold',
    color: '#1F41BB',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F4FF',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontFamily: 'Poppins_500Medium',
    color: '#626262',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputFocused: {
    borderColor: '#1F41BB',
    borderWidth: 2,
  },
  forgotPassword: {
    color: '#1F41BB',
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    textAlign: 'right',
    right: -80,
  },
  createAccount: {
    color: '#494949',
    alignSelf: 'flex-end',
    marginTop: 20,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    textAlign: 'right'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1F41BB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1F41BB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
  },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  orText: {
    color: '#1F41BB',
    marginBottom: 15,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    textAlign: 'center'
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  socialButton: {
    width: 60,
    height: 44,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;