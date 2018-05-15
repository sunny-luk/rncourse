import React from 'react';
import { Text, StyleSheet } from 'react-native';

const myTextWrapper = (props) => {
  return (
    <Text
      {...props}
      style={[styles.myText, props.style]}
    >
      {props.children}
    </Text>
  )
};

const styles = StyleSheet.create({
  myText: {
    color: '#bbb',
    fontFamily: 'Arial',
  }
});

export default myTextWrapper;