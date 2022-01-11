import { render, screen } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter Testing', () => {
  test('Render the title of the counter.', () => {
    const wrapper = shallow(<App/> )
    expect(wrapper.find('h1').text()).toContain('This is counter app.');
  });

  test('Render A Button With Text of Increment', () => {
    const wrapper = shallow(<App/> )
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  });
})
