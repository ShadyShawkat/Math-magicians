import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <h1>Math Magicians</h1>
    <ul className={styles['nav-links']}>
      <li>
        <Link to="/Math-magicians/">Home</Link>
      </li>
      <li>
        <Link to="/Math-magicians/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/Math-magicians/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
