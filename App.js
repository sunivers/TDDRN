import React, {Component} from 'react';
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

  onCompleted = index => {
    this.setState({
      items: this.state.items.map((item, i) => {
        if (index !== i) return item;
        return {
          ...item,
          completed: !item.completed,
        };
      }),
    });
  };

  onDeleted = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <View testID="welcome">
        <Text>Todo TDD</Text>
        <AddTodo onAdded={this.onAdded} />
        <TodoList
          items={this.state.items}
          onCompleted={this.onCompleted}
          onDeleted={this.onDeleted}
        />
      </View>
    );
  }
}

