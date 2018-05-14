import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions'

class PlaceDetail extends Component {
  deleteItemHandler= () => {
    this.props.deletePlace && this.props.deletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <View>
          <Image style={styles.image} source={this.props.selectedPlace.image}/>
          <Text style={styles.text}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.deleteItemHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name={'ios-trash'} color={'red'}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  deleteButton: {
    alignItems: 'center'
  }
});

export default connect(null, { deletePlace })(PlaceDetail);