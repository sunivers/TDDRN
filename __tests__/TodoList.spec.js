import React from 'react';
import TodoList from '../components/TodoList';
import {shallow} from 'enzyme';

describe('Rendering', () => {
  let wrapper;
  let props = {
    items: [
      {
        text: 'some Todo 1',
        completed: false,
      },
      {
        text: 'some Todo 2',
        completed: true,
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<TodoList {...props} />);
  });

  it('should render a flat list', () => {
    expect(wrapper.find('FlatList')).toHaveLength(1);
  });

  it('should pass props to FlatList', () => {
    expect(wrapper.find('FlatList').prop('data')).toBe(props.items);
  });
});
