import React from 'react';
import styles from './TransparentButton.module.scss';

const TransparentButton = ({ text, onClickFunc, disabled = false }) => {
  return (
    <button
      type='button'
      onClick={(e) => {
        onClickFunc(e);
      }}
      className={styles.button}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default TransparentButton;
