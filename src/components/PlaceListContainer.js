import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import ListItem from './ListItem';

const PlaceList = (props) => {

  onItemPress = (i) => {
    props.onItemPress && props.onItemPress(i)
  };

  return (
    <View style={styles.listContainer}>
      <FlatList 
        data={props.list}
        renderItem={({item}) => <ListItem item={item} onPress={()=>onItemPress(item)}/>}
        keyExtractor={(item, index) => item.key.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'red',
  },
});

export default PlaceList;