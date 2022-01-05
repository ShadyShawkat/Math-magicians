/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, isZero, isOperator, btnClickHandler }) => (
  <button
    type="button"
    className={`
          ${styles.btn} 
          ${isZero ? styles['zero-num'] : ''} 
          ${isOperator ? styles.operator : ''}
        `}
    onClick={btnClickHandler}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isZero: PropTypes.bool.isRequired,
  isOperator: PropTypes.bool.isRequired,
  btnClickHandler: PropTypes.func.isRequired,
};

export default Button;
