import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';
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
        <TextInput onChangeText={this.onChangeText}></TextInput>
        <Button title="Add" onPress={this.onPress}></Button>
      </View>
    );
  }
}
