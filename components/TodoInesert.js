import React, { useState, Component } from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import Icon from 'react-native-ionicons'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

var s = {
  sc: 0,
}

const TodoInsert = ({ onAddTodo, todos }) => {

  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  const c = {
    count: 0,
  }
  const d = {
    dc: 0,
  }
  todos.map(todo => c.count++);
  todos.map(todo => todo.checked ? d.dc++ : d.dc+=0);
  //console.log("total: "+c.count)
  s.sc = ( d.dc * 100)/ c.count
  //console.log("checked: " + d.dc)


  return (
    <View style={styles.container}>
      <Guagebar> </Guagebar>
      <View style={styles.inputContainer}>
        <View style={styles.addButton}>
          <Icon name="add" size={30} color="#999" onPress={addTodoHandler} />
        </View>
        <TextInput style={styles.input}
          placeholder="할일을 입력하세요"
          value={newTodoItem}
          onChangeText={todoInputHandler}
          placeholderTextColor={'#999'}
          autoCorrect={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: 150,
    marginLeft: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 20,
    marginRight: 20,
  },
  addButton: {
    marginLeft: 25,
  },
});

class Guagebar extends Component {

  render() {   
    return (
      <View>
        <ProgressBarAnimated
          width={Dimensions.get("screen").width}
          height={50}
          value={s.sc}
          backgroundColor="#ffe3ed"
          backgroundColorOnComplete="#8FE0DA"
        />
      </View>
    );
  }
}

export default TodoInsert;