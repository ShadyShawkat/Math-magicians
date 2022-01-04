/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from '../Button/Button';

import styles from './Claculator.module.css';

const btnTexts = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

class Calculator extends React.Component {
  render() {
    return (
      <div className={styles.calculator}>
        <input className={styles.calculator_output} value="0" />
        {btnTexts.map((btnTxt) => (
          <Button
            key={Math.random()}
            isZero={btnTxt === '0'}
            isOperator={['÷', 'x', '-', '+', '='].includes(btnTxt)}
          >
            {btnTxt}
          </Button>
        ))}
      </div>
    );
  }
}

export default Calculator;
