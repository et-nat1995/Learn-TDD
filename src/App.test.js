import { render, screen } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/> )
  });

  test('Render the title of the counter.', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app.');
  });

  test('Render A Button With Text of Increment', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  });

  test('Render the initial value of state in a div.', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0')
  });

  test('Render the click event of increment button and counter value', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0')
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })

  test('Render A Button With Text of Decrement', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('Decrement')
  });

  test('Render the click event of decrement button and counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1')
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })
})
