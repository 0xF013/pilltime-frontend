import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { create } from '../../redux/alarms';
import { connect } from 'react-redux';

export class AlarmCreateForm extends Component {

  onSubmit = async (data) => {
    await this.props.create(data);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Create alarm</h2>
        <div>
          <label htmlFor="ingestionTime">Ingestion time:</label>
          <br />
          <Field name="ingestionTime" component="input" type="text" placeholder="10:30" />
        </div>
        <div>
          <label htmlFor="pillName">Pill name:</label>
          <br />
          <Field name="pillName" component="input" type="text" placeholder="Alprazolam" />
        </div>
        <div>
          <label htmlFor="dosage">Dosage:</label>
          <br />
          <Field name="dosage" component="input" type="text" placeholder="0.5mg" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const DecoratedWithForm = reduxForm({ form: 'alarmCreateForm'})(AlarmCreateForm);
export default connect(undefined, { create })(DecoratedWithForm);