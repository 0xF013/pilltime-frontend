import React from 'react';
import Alarm from './Alarm';
import { shallow } from 'enzyme';

describe('<Alarm />', () => {
  it('matches the snapshot', () => {
    const alarm = {
      dosage: '20mg',
      pillName: 'Aspirin',
      ingestionTime: '10:30am'
    };
    const wrapper = shallow(<Alarm alarm={ alarm } />);
    expect(wrapper).toMatchSnapshot();
  });
});