  // Dependencies
  import React from 'react';
  import { shallow } from 'enzyme';

  // Component to test...
  import Hello from './index';

  describe('Hello', () => {
    const wrapper = shallow(<Hello />);
    const wrapperWithProps = shallow(<Hello name="Carlos" />);

    it('should render Home component', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should render by default Hello World', () => {
      expect(wrapper.text()).toBe('Hello World');
    });

    it('should render the name prop', () => {
      expect(wrapperWithProps.text()).toBe('Hello Carlos');
    });

    it('should has .Home class', () => {
      expect(wrapper.find('h1').hasClass('Hello')).toBe(true);
    });
  });
