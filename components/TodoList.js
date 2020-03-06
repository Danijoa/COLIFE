import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';
import moment from "moment";

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.date}>{moment().format('L')}</Text>

      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    padding: 10,
  },
  date: {
    color: "#8FE0DA",
    fontWeight: "bold",
    fontSize: 20,
    width: 340,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
},
});

export default TodoList;