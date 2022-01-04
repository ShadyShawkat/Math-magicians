/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from '../Button/Button';
import calculate from '../../logic/calculate';

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
  constructor(props) {
    super(props);

    this.state = {
      calculator: {
        total: null,
        next: null,
        operation: null,
      },
      inputValue: '0',
    };
  }

  btnClickHandler = (event) => {
    const { calculator } = this.state;
    const newState = calculate(calculator, event.target.textContent);
    let newInputValue = 0;
    if (newState.next && !newState.total && !newState.operation) {
      newInputValue = newState.next;
    }
    if (newState.total && !newState.next) {
      newInputValue = newState.total + (newState.operation ?? '');
    }
    if (newState.total && newState.next) {
      newInputValue = newState.total + newState.operation + newState.next;
    }
    if (newState.total !== undefined || newState.next !== undefined) {
      this.setState({ calculator: newState });
    }
    this.setState({ inputValue: newInputValue });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={styles.calculator}>
        <input
          disabled
          className={styles.calculator_output}
          value={inputValue}
        />
        {btnTexts.map((btnTxt) => (
          <Button
            key={Math.random()}
            isZero={btnTxt === '0'}
            isOperator={['÷', 'x', '-', '+', '='].includes(btnTxt)}
            btnClickHandler={this.btnClickHandler}
          >
            {btnTxt}
          </Button>
        ))}
      </div>
    );
  }
}

export default Calculator;
