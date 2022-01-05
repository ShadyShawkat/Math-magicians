import { useState } from 'react';
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

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [inputValue, setInputValue] = useState('0');

  const btnClickHandler = (event) => {
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
      setCalculator(newState);
    }
    setInputValue(newInputValue);
  };

  return (
    <div className={styles.calculator}>
      <input disabled className={styles.calculator_output} value={inputValue} />
      {btnTexts.map((btnTxt) => (
        <Button
          key={Math.random()}
          isZero={btnTxt === '0'}
          isOperator={['÷', 'x', '-', '+', '='].includes(btnTxt)}
          btnClickHandler={btnClickHandler}
        >
          {btnTxt}
        </Button>
      ))}
    </div>
  );
};

export default Calculator;
