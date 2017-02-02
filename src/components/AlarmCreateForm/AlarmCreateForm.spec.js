import React from 'react';
import { AlarmCreateForm } from './AlarmCreateForm';
import { shallow } from 'enzyme';

describe('<AlarmCreateForm />', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
    <AlarmCreateForm
      handleSubmit={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches the create action on submit', () => {
    const create = jest.fn();
    const wrapper = shallow(
    <AlarmCreateForm
      handleSubmit={() => {}}
      create={ create }
    />);
    wrapper.instance().onSubmit({some: 'data'});
    expect(create).toHaveBeenCalledWith({some: 'data'});
  });
});