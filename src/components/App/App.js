import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';


export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Grid>
        <h1>Pilltime</h1>
        { children }
      </Grid>
    );
  }
}
