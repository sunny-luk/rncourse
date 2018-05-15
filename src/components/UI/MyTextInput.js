import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const myTextInput = (props) => {
  return (
    <TextInput
      underlineColorAndroid='transparent'
      {...props}
      style={[styles.myTextInput, props.style]}
    />
  )
};

const styles = StyleSheet.create({
  myTextInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    margin: 5,
    backgroundColor: '#ddd'
  }
});

export default myTextInput;