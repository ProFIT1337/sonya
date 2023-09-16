import React from 'react';
import { useState } from 'react';
import styles from './OrderingInput.module.scss';

const OrderingInput = ({ title, onInputFunc }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <div className={(isOnFocus ? styles.onFocus : '') + ' ' + styles.wrapper}>
      <input
        type='text'
        id={title}
        onFocus={() => setIsOnFocus(true)}
        onBlur={(e) => (e.target.value ? null : setIsOnFocus(false))}
        onInput={(e) => {
          onInputFunc(e.target.value);
        }}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default OrderingInput;
