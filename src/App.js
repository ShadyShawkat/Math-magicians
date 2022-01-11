import React from 'react';
import Calculator from './components/Calculator/Calculator';
import styles from './App.module.css';

import Nav from './components/Nav/Nav';

const App = () => (
  <>
    <Nav />
    <div className={styles.wrapper}>
      <Calculator />
    </div>
  </>
);

export default App;
