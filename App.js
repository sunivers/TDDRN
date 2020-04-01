import React, { Component } from 'react';
import {View, Text} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [],
  };

  onAdded = text => {
    this.setState({
      items: [{text, completed: false}, ...this.state.items],
    });
  };

  render() {
    return (
      <View testID="welcome">
        <Text>Todo TDD</Text>
        <AddTodo onAdded={this.onAdded} />
        <TodoList items={this.state.items} />
      </View>
    );
  }
}

