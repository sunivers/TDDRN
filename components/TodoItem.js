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
  onCompleted = () => {
    const {onCompleted, index} = this.props;
    onCompleted(index);
  };

  onDelete = () => {
    const {onDelete, index} = this.props;
    onDelete(index);
  };

  render() {
    const {item} = this.props;
    return (
      <View style={(item || {}).completed ? styles.completed : styles.default}>
        <Text testID={item.completed ? 'completed' : 'uncompleted'}>
          {item.text}
        </Text>
        <Button
          title="complete"
          testID="completeButton"
          onPress={this.onCompleted}
        />
        <Button title="delete" onPress={this.onDelete} />
      </View>
    );
  }
}
