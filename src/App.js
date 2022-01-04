/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Calculator from './components/Calculator/Calculator';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Calculator />
      </div>
    );
  }
}

export default App;
