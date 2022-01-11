import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

import Nav from './components/Nav/Nav';
import Calculator from './components/Calculator/Calculator';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';

const App = () => (
  <>
    <Router>
      <Nav />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  </>
);

export default App;
