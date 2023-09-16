import React from 'react';
import styles from './OrderCheckbox.module.scss';

const OrderCheckbox = ({ checkboxId = '', clickFunc = () => {}, checked }) => {
  return (
    <input
      className={styles.checkbox}
      type='checkbox'
      checked={checked}
      id={checkboxId}
      onChange={(event) => clickFunc(event)}
    />
  );
};

export default OrderCheckbox;
