import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
  },
  completed: {
    backgroundColor: 'red',
  },
});

export default class TodoItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={(item || {}).completed ? styles.completed : styles.default}>
        <Text></Text>
        <Button title="complete"></Button>
        <Button title="delete"></Button>
      </View>
    );
  }
}
