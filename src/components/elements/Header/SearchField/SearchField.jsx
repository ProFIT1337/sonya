import React, { useEffect, useState } from 'react';
import styles from './SearchField.module.scss';
const SearchField = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
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
