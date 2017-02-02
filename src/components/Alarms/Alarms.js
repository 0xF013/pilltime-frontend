import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alarm from '../Alarm';
import AlarmCreateForm from '../AlarmCreateForm';
import { loadAll } from '../../redux/alarms';
import { Grid, Row, Col } from 'react-flexbox-grid';

export class Alarms extends Component {
  componentDidMount() {
    this.props.loadAll();
  }

  render() {
    const { items } = this.props;
    return (
      <Grid>
        <Row>
          <Col md={6} xs={12}>
            <h2>Alarms</h2>
            { items.map(alarm => <Alarm key={alarm.id} alarm={alarm} />)}
          </Col>
          <Col md={6} xs={12}>
            <AlarmCreateForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => state.alarms;

export default connect(mapStateToProps, { loadAll })(Alarms);