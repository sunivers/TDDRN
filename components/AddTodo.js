import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
export default class AddTodo extends Component {
  state = {
    text: '',
  };

  onChangeText = text => {
    this.setState({text});
  };
  onPress = () => {
    const {onAdded} = this.props;
    onAdded(this.state.text);
  };

  render() {
    return (
      <View>
        <TextInput testID="textInput" onChangeText={this.onChangeText} />
        <Button testID="addButton" title="Add" onPress={this.onPress} />
      </View>
    );
  }
}
