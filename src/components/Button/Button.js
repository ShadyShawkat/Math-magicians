/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { children, isZero, isOperator } = this.props;
    return (
      <button
        type="button"
        className={`${styles.btn} ${isZero ? styles['zero-num'] : ''} ${
          isOperator ? styles.operator : ''
        }`}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isZero: PropTypes.bool.isRequired,
  isOperator: PropTypes.bool.isRequired,
};

export default Button;
