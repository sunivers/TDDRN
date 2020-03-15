import React from 'react';
import {View, Text} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <View>
      <Text>Todo TDD</Text>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </View>
  );
};

export default App;
