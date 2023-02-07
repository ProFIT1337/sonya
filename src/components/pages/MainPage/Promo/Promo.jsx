import React from 'react';
import styles from './Promo.module.scss';
import testImage1 from '../../../../img/testImages/promo_main.png';
import testImage2 from '../../../../img/testImages/promo_secondary1.png';
import testImage3 from '../../../../img/testImages/promo_secondary2.png';

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promo__main}>
        <div className={styles.promo__text}>
          <span>IKEA</span> <br /> В Наличии
        </div>
        <img src={testImage1} alt='' />
      </div>
      <div className={styles.promo__secondary_first}>
        <img src={testImage2} alt='' />
      </div>
      <div className={styles.promo__secondary_second}>
        <img src={testImage3} alt='' />
      </div>
    </div>
  );
};

export default Promo;
