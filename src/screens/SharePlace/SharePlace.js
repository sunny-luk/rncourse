import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import InputContainer from '../../components/InputContainer';

import { addPlace } from '../../store/actions';

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  }

  render() {
    return (
      <View>
        <InputContainer onPlaceAdd={this.props.addPlace}/>
      </View>
    )
  };
}

export default connect(null, { addPlace })(SharePlaceScreen);