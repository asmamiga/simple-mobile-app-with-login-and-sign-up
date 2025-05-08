import React from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor = '#1F41BB', textColor = '#fff' }) => {
  const buttonStyle = [styles.button, { backgroundColor }];
  const textStyle = [styles.text, { color: textColor }];

  return (
    <TouchableOpacity 
      style={title === 'Register' ? [styles.button, { backgroundColor: '#fff' }] : buttonStyle} 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <Text style={title === 'Register' ? [styles.text, { color: '#000' }] : textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
  },
});

export default CustomButton;