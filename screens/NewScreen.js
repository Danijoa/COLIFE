import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoInsert from '../components/TodoInesert';
import TodoList from '../components/TodoList';
import {Image} from 'react-native'

const NewScreen = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
    const [todos, setTodos] = useState([]);

    //todo insert
    const addTodo = text => {
      setTodos([
        ...todos,
        {id: Math.random().toString(), textValue: text, checked: false},
      ]);
    };

    //todo remove
    const removeTodo = id => e => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    //todo done
    const toggleTodo = id => e => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo, ),
      );
    };
    
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require('./dani.png')} />
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
        </View>        
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  image:{
    width: 80, 
    height: 80,
    marginTop: 50,
    marginLeft: 140,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 20,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default NewScreen;