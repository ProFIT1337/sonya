import React from 'react';
import styles from './NotFound.module.scss';
import { ReactComponent as BrokenSofa } from '../../../img/notFound.svg';
import { Link } from 'react-router-dom';
import InStock from '../../elements/InStock/InStock';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Страница не найдена</h1>
      <div className={styles.content}>
        <div className={styles.img}>
          <BrokenSofa />
        </div>
      </div>
      <div className={styles.another}>
        Посмотрите другие наши товары в <Link to='/catalog'>Каталоге</Link>
      </div>
      <div className={styles.products}>
        <InStock title='Вам может быть интересно' />
      </div>
    </div>
  );
};

export default NotFound;
