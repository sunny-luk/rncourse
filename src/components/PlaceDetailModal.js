import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.image} source={props.selectedPlace.image}/>
        <Text style={styles.text}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  deleteItemHandler= () => {
    props.deleteItem && props.deleteItem(props.selectedPlace)
  }
  return (
    <Modal 
      visible={!!props.selectedPlace} 
      animationType={'slide'}
      onRequestClose={props.closeDetail}
    >
      <View>
        {modalContent}
        <View>
          <TouchableOpacity onPress={deleteItemHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name={'ios-trash'} color={'red'}/>
            </View>
          </TouchableOpacity>
          <Button title={'Close'} onPress={props.closeDetail}/>
        </View>
      </View>
    </Modal>
  )
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

export default placeDetail;