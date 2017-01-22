import React, { Component } from 'react';
import styles from './App.css';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.app}>
        <h1>Pilltime</h1>
        { children }
      </div>
    );
  }
}
