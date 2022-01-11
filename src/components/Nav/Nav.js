import React from 'react';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <h1>Math Magicians</h1>
    <ul className={styles['nav-links']}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <li>
        <a href="/quote">Quote</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
