import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <div className={styles.quote}>
    <div className={styles['quote-text']}>
      &quot;Mathmatics is not about numbers, equation, computations, or
      algorithms: it is about understanding.&quot;
    </div>
    <br />
    <span>-William Paul Thurston</span>
  </div>
);

export default Quote;
