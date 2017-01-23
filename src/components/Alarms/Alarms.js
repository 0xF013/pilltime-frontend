import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Alarm from './Alarm';
import AlarmCreateForm from '../AlarmCreateForm';
import { loadAll } from '../../redux/alarms';

export class Alarms extends Component {
  componentDidMount() {
    this.props.dispatch(loadAll());
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <h2>Create alarm</h2>
        <AlarmCreateForm />
        <h2>Alarms</h2>
        { items.map(alarm => <div key={alarm.id}>Take {alarm.dosage} of {alarm.pillName} at {alarm.ingestionTime}</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => state.alarms;

export default connect(mapStateToProps)(Alarms);