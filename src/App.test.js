import App from './App';
// import { Counter } from 'features/Counter';
import { shallow } from 'enzyme';

describe('Render The app with Counter component.', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/> )
  });

  test('Renders the Counter Component.', () => {
    // expect(wrapper.containsMatchingElement(<Counter />)).toEqual(true);
    expect(wrapper.find('Counter')).toHaveLength(1);
  });
})
