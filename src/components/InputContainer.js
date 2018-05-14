import React, { Component } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

class InputContainer extends Component {
  state = {
    placeName: ''
  }

  onChangeText = (value) => {
    this.props.onChangeText && this.props.onChangeText(value)
    this.setState((prevState) => {
      return {
        placeName: value
      }
    });
  };

  onPress = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdd(this.state.placeName);
    this.setState({placeName: ''})
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder='Enter awesome place' 
          onChangeText={this.onChangeText}
          value={this.state.placeName}
        />
        <Button style={styles.submit} title='Submit' onPress={this.onPress}/>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderColor: 'blue',
    borderWidth: 2,
  },
  submit: {
    width: '30%',
  }
});

export default InputContainer;