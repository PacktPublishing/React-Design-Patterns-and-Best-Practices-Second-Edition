  // Dependencies
  import React from 'react';
  import { shallow } from 'enzyme';

  // Component to test...
  import ShowInformation from './index';

  describe('ShowInformation', () => {
    const wrapper = shallow(<ShowInformation />);

    it('should render ShowInformation component', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should modify the state onChange', () => {
      wrapper.find('input[name="name"]').simulate('change', {
        target: {
          name: 'name',
          value: 'Carlos'
        }
      });

      wrapper.find('input[name="age"]').simulate('change', {
        target: {
          name: 'age',
          value: 31
        }
      });

      // Getting the values of the name and age states
      expect(wrapper.state('name')).toBe('Carlos');
      expect(wrapper.state('age')).toBe(31);
    });

    it('should show the personal information when user clicks on the button', () => {
      // Simulating the click event
      wrapper.find('button').simulate('click');

      // The show state should be true...
      expect(wrapper.state('show')).toBe(true);
    });
  });
