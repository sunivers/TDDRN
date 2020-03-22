import React, {Component} from 'react';
import {FlatList} from 'react-native';

export default class TodoList extends Component {
  render() {
    const {items} = this.props;
    return <FlatList data={items} />;
  }
}
