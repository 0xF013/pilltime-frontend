import React from 'react';
import { Alarms } from './Alarms';
import { shallow } from 'enzyme';

describe('<Alarms />', () => {
  it('matches the snapshot', () => {
    const items = [
      { some: 'item1' },
      { some: 'item2' },
      { some: 'item3' },
    ];
    const wrapper = shallow(<Alarms items={ items } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches loadAll on mount', () => {
    const loadAll = jest.fn();
    const wrapper = shallow(<Alarms items={ [] } loadAll={ loadAll } />);
    wrapper.instance().componentDidMount();
    expect(loadAll).toHaveBeenCalled();
  });
});