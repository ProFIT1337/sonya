import React from 'react';
import { useNavigate } from 'react-router-dom';
import Attention from '../../elements/Attention/Attention';
import InStock from '../../elements/InStock/InStock';
import Map from '../../elements/Map/Map';
import PopularCategories from '../../elements/PopularCategories/PopularCategories';
import styles from './MainPage.module.scss';
import Pluses from './Pluses/Pluses';

import Promo from './Promo/Promo';

const MainPage = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IKEA Krasnoyarsk - товары в любую точку России</h1>

      <div className={styles.description}>
        IKEA Krasnoyarsk - товары из Икеи в любую точку России, IKEA Krasnoyarsk - товары из Икеи в любую точку
        РоссииIKEA Krasnoyarsk - товары из Икеи в любую точку РоссииIKEA Krasnoyarsk - товары из Икеи в любую точку IKEA
        Krasnoyarsk - товары из Икеи в любую точку РоссииIKEA Krasnoyarsk - товар из Икеи в любую точку.{' '}
        <span
          className={styles.more}
          onClick={() => {
            navigate('/blog');
          }}>
          Подробнее
        </span>{' '}
      </div>
      <div
        className={styles.promo}
        onClick={() => {
          navigate('/blog');
        }}>
        <Promo />
      </div>
      <div className={styles.popular}>
        <PopularCategories />
      </div>
      <div className={styles.attention}>
        <Attention />
      </div>
      <div className={styles.in_stock}>
        <InStock />
      </div>
      <div className={styles.pluses}>
        <Pluses />
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
};

export default MainPage;
