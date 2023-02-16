import React from 'react';
import styles from './SearchField.module.scss';
import useWindowSize from '../../../../functions/useWindowSize';
const SearchField = () => {
  const [windowWidth] = useWindowSize();
  let isMobile = windowWidth < 600;

  return (
    <div className={styles.fieldWrapper}>
      <input
        type='text'
        className={styles.field}
        placeholder={
          isMobile ? 'Введите название или артикул' : 'Введите название или артикул интересующего вас товара'
        }
      />
    </div>
  );
};

export default SearchField;
