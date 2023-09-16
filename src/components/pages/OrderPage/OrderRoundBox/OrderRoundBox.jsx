import React from 'react';
import styles from './OrderRoundBox.module.scss';

const OrderRoundBox = ({ checkboxValue, checkboxName, checked, clickFunc, checkboxId }) => {
  return (
    <input
      className={styles.radio}
      type='radio'
      checked={checked ? 'checked' : null}
      value={checkboxValue}
      name={checkboxName}
      onChange={(event) => clickFunc(event)}
      id={checkboxId}
    />
  );
};

export default OrderRoundBox;
