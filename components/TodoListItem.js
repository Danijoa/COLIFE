import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons'
import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    text: 'Button'
  }
]

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <Swipeout style={styles.swipe} right={swipeoutBtns}>

      <TouchableOpacity onPressOut={onToggle(id)}>
          <Text
          style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      </TouchableOpacity>
 
      {checked ? (
          <View style={styles.completeCheck}>
            <Icon name="checkmark" size={30} color="#999" />
          </View>
        ) : (
          <View style={styles.doCircle}/>
        )}

</Swipeout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    width: 350,
    height: 50
  },
  swipe: {
    width: 340,
    height: 40,
    backgroundColor: 'white',
    //opacity: 0.5,
    //position: 'relative'
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 15,
    width: 300,
    color: 'black',
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  doCircle: {
    width: 20,
    borderColor: "#999",
    borderWidth: 0,
    marginRight: 3,
  },
  completeCheck: {
    marginRight: 0,
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  buttonText: {
    marginRight: 20,
  },
});

export default TodoListItem;