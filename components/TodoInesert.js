import React, { useState, Component } from 'react';
import { StyleSheet, TextInput, View, Button, Dimensions } from 'react-native';
import Icon from 'react-native-ionicons'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const TodoInsert = ({ onAddTodo }) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };
  return (
    <View style={styles.container}>
      <Guagebar></Guagebar>
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
  state = {
    progress: 20,
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }

  render() {
    return (
      <View>
        <ProgressBarAnimated
          width={Dimensions.get("screen").width}
          height={50}
          value={this.state.progress}
          backgroundColor="#ffe3ed"
          backgroundColorOnComplete="#8FE0DA"
        />
        {/*<View style={styles.buttonContainer}>
              <Button
                title="Increase 20%"
                onPress={this.increase.bind(this, 'progress', 20)}
              />
             </View>*/}
      </View>
    );
  }
}

export default TodoInsert;