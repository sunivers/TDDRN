import React from 'react';
import TodoItem, {styles} from '../components/TodoItem';
import {shallow} from 'enzyme';

describe('Rendering', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      item: {},
    };
    wrapper = shallow(<TodoItem />);
  });

  it('should render a Text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });

  describe('Uncompleted', () => {
    it('should have the default style', () => {
      expect(wrapper.prop('style')).toBe(styles.default);
    });
  });

  describe('Completed', () => {
    beforeEach(() => {
      props.item.completed = true;
      wrapper = shallow(<TodoItem {...props} />);
    });
    it('should have the completed style', () => {
      expect(wrapper.prop('style')).toBe(styles.completed);
    });
  });
});
