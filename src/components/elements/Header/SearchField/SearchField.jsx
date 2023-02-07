import React from 'react';
import styles from './SearchField.module.scss';
const SearchField = () => {
  return (
    <div className={styles.fieldWrapper}>
      <input type='text' className={styles.field} placeholder='Введите название или артикул интересующего вас товара' />
    </div>
  );
};

export default SearchField;
