import React from 'react';
import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from '../../../img/pagination/arrow.svg';

function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

const Pagination = ({ currentPage, pageCount, setPage }) => {
  function beforePage() {
    if (currentPage < 2) {
      return;
    }
    setPage(currentPage - 1);
  }

  function nextPage() {
    if (+currentPage >= pageCount) {
      return;
    }
    setPage(+currentPage + 1);
  }
  return (
    <div className={styles.wrapper}>
      {currentPage > 1 && (
        <div className={styles.before} onClick={beforePage}>
          <div className={styles.beforeArrow}>
            <Arrow />
          </div>
          <div className={styles.beforeText}>Предыдущая страница</div>
        </div>
      )}
      <div className={styles.numbers}>
        {range(pageCount, 1).map((number) => getPageItem(number, currentPage, pageCount, setPage))}
      </div>
      {currentPage < pageCount && (
        <div className={styles.after} onClick={nextPage}>
          <div className={styles.afterText}>Следующая страница</div>
          <div className={styles.afterArrow}>
            <Arrow />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;

function getPageItem(number, currentPage, pageCount, setPage) {
  if (
    number === 1 ||
    number === +currentPage ||
    pageCount === number ||
    Math.abs(+currentPage - number) === 1 ||
    (+currentPage === 1 && number === 3) ||
    (+currentPage === pageCount && number === pageCount - 2)
  ) {
    return (
      <div
        key={number}
        className={styles.number + ' ' + (number === +currentPage ? styles.active : '')}
        onClick={() => {
          setPage(number);
        }}>
        {number}
      </div>
    );
  } else if (
    Math.abs(+currentPage - number) === 2 ||
    (+currentPage === 1 && number === 4) ||
    (+currentPage === pageCount && number === pageCount - 3)
  ) {
    return (
      <div key={number} className={styles.number} style={{ cursor: 'default' }}>
        ...
      </div>
    );
  } else {
    return;
  }
}
