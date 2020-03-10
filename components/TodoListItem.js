import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons'
import Swipeout from 'react-native-swipeout';

const TodoListItem = ({ textValue, id, checked, onRemove, onToggle }) => {

  var swipeoutBtns = [
    {
      text: 'delete',
      color: '#8FE0DA',
      backgroundColor: '#ffe3ed',
      opacity: 0.5,
      //onPress: () => { onRemove(id) },
    }
  ]

  return (
    <View style={styles.container}>
      <Swipeout style={styles.swipe} right={swipeoutBtns} onOpen={onRemove(id)}>
        <View style={styles.input}>
          <TouchableOpacity style={styles.touch} onPressOut={onToggle(id)}>
            <Text style={[styles.text, checked ? styles.strikeText : styles.unstrikeText,]}>
              {textValue}
            </Text>
          </TouchableOpacity>

          <View style={styles.icons}>
            {checked ? (
              <View style={styles.completeCheck}>
                <Icon name="checkmark" size={30} color="#999" />
              </View>
            ) : (
                <View style={styles.doCircle} />
              )}
          </View>
        </View>
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
    width: 340,
    paddingTop: 8,
    paddingBottom: 8,
  },
  swipe: {
    width: 340,
    backgroundColor: 'white',
    //opacity: 0.8,
  },
  input: {
    width: 270,
    flexDirection: 'row',
  },
  touch: {
    alignSelf: 'baseline',
  },
  text: {
    fontWeight: '500',
    fontSize: 18,
    color: "#8FE0DA",
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  icons: {
    marginLeft: 300,
    position: "absolute"
  },
  completeCheck: {
  },
  doCircle: {
    width: 20,
    borderColor: "#999",
    borderWidth: 0,
    marginRight: 3,
  },
  buttonContainer: {
    borderColor: "black",
    marginHorizontal: 10,
  },
  buttonText: {
    marginRight: 20,
  },
});

export default TodoListItem;