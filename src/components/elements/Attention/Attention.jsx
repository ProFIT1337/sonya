import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransparentButton from '../TransparentButton/TransparentButton';
import styles from './Attention.module.scss';

const Attention = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Обратите внимание</div>
      <div className={styles.description}>
        IKEA приостановила свою работу на территории Росиийской федерации, но даже сейчас в наличи у нас есть многие
        товары из каталога. <br />
        Также мы настроили партнерсво между поставщиками мебели IKEA в России, поэтому привычная мебель осталась без
        поддержки бренда, но хуже не стала. <br />
        Мы рады помочь сделать вашу квартиру красивее и уютнее!
      </div>
      <div className={styles.button}>
        <TransparentButton
          text='Подробнее'
          onClickFunc={() => {
            navigate('/blog');
          }}
        />
      </div>
    </div>
  );
};

export default Attention;
