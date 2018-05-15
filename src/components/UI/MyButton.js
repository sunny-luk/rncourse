import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const myButton = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, {backgroundColor: props.color}]}>
        <Text>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  }
});

export default myButton;