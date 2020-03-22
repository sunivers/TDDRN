import 'react-native';
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App></App>);
  it('is Text visible?', () => {
    expect(wrapper.find('Text').contains('Todo TDD')).toBe(true);
  });

  it('is AddTodo visible?', () => {
    expect(wrapper.find('AddTodo')).toHaveLength(1);
  });
  it('is TodoList visible?', () => {
    expect(wrapper.find('TodoList')).toHaveLength(1);
  });
});
