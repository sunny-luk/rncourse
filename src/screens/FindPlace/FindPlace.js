import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceListContainer from '../../components/PlaceListContainer';

class FindPlaceScreen extends Component {
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

  onItemPress = (item) => {
    const key = item.key
    const selPlace = this.props.placeList.find(place => place.key === key)
    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: item.name,
      passProps: {
        selectedPlace: item
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceListContainer list={this.props.placeList} onItemPress={this.onItemPress}/>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

function mapStateToProps(state) {
  return {
    placeList: state.places.placeList
  }
};

export default connect(mapStateToProps)(FindPlaceScreen);