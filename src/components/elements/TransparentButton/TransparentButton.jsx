import React from 'react';
import styles from './TransparentButton.module.scss';

const TransparentButton = ({ text, onClickFunc }) => {
  return (
    <button
      type='button'
      onClick={() => {
        onClickFunc();
      }}
      className={styles.button}>
      {text}
    </button>
  );
};

export default TransparentButton;
