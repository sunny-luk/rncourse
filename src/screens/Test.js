import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';
class TestScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View><Text>hello</Text></View>
        <View><Text>gello</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1
  }
})

export default TestScreen;