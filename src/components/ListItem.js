import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.listItem}>
        <Image style={styles.listImage} source={props.item.image} />
        <View style={styles.listText}>
          <Text>{props.item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listImage: {
    height: 30,
    width: '50%',
    marginRight: 8,
    resizeMode: 'cover',
  },
  listText: {
    width: '50%'
  }
});

export default ListItem;