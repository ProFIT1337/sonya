import React from 'react';
import styles from './SearchField.module.scss';
import useWindowSize from '../../../../functions/useWindowSize';
import { useNavigate, useSearchParams } from 'react-router-dom';
const SearchField = () => {
  const [windowWidth] = useWindowSize();
  let isMobile = windowWidth < 600;
  const navigate = useNavigate();
  const search = (event) => {
    if (event.keyCode === 13) {
      navigate(`/search?search=${event.target.value}`);
    }
  };
  const [searchParams] = useSearchParams();
  const searchString = searchParams.get('search');
  return (
    <div className={styles.fieldWrapper}>
      <input
        type='text'
        className={styles.field}
        placeholder={
          isMobile ? 'Введите название или артикул' : 'Введите название или артикул интересующего вас товара'
        }
        defaultValue={searchString}
        onKeyDown={(event) => {
          search(event);
        }}
      />
    </div>
  );
};

export default SearchField;
