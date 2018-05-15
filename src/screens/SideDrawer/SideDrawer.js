import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawerScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.navigator.setOnNavigatorEvent((e)=>console.log(e));
  // }
  render() {
    return (
      <View 
        style={
          [
          styles.container,
          {width: Dimensions.get('window').width * 0.8}
          ]
        }
      >
        <Text>Hi</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbb',
    flexDirection: 'row',
    flex: 1,
  }
})

export default SideDrawerScreen;
