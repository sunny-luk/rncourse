import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import MyTextWrapper from '../../components/UI/MyTextWrapper';
import MyTextInput from '../../components/UI/MyTextInput';
import MyButton from '../../components/UI/MyButton';
import backgroundImage from '../../assets/img/bandroom.jpg';

import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MyTextWrapper>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Auth Screen</Text>
          </MyTextWrapper>
          <MyButton color='#aaa'>Switch to Login</MyButton>
          <View style={{width: '80%'}}>
            <MyTextInput placeholder='Enter your email'/>
            <MyTextInput placeholder='Enter your password'/>
            <MyTextInput placeholder='Enter your password again' style={{backgroundColor: 'red'}}/>
          </View>
          <MyButton color='#a21915' onPress={this.loginHandler}>Login</MyButton>
        </View>
      </ImageBackground>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // flexDirection: 'row',
    // justifyContent: 'center'
  },
  sibling: {
    borderColor: 'green',
    borderWidth: 1,
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  }
})

export default AuthScreen;