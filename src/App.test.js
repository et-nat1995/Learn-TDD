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
})
