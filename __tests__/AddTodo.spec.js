import 'react-native';
import React from 'react';
import AddTodo from '../components/AddTodo';
import {shallow} from 'enzyme';

describe('Rendering', () => {
  let wrapper;

  beforeEach(() => {
    // 각 테스트 실행시 마다 컴포넌트 새로 렌더링 (깨끗한 컴포넌트 얻기 위함)
    wrapper = shallow(<AddTodo />);
  });

  it('is TextInput visible?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('is Button visible?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});

describe('Interaction', () => {
  let wrapper;
  let props;
  const text = 'some Todo';

  beforeEach(() => {
    props = {
      onAdded: jest.fn(),
    };
    wrapper = shallow(<AddTodo {...props} />);

    wrapper.find('TextInput').simulate('changeText', text);
    wrapper.find('Button').prop('onPress')();
  });

  it('should call the onAdded callback with input text', () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1);
    expect(props.onAdded).toHaveBeenCalledWith(text);
  });
});
