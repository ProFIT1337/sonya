import React from 'react';
import styles from './CardButton.module.scss';
import { ReactComponent as CardImage } from '../../../../img/card.svg';
import { Link } from 'react-router-dom';
const CardButton = () => {
  return (
    <Link to='/' className={styles.button}>
      <div className={styles.img}>
        <CardImage />
      </div>
      <div className={styles.text}>Корзина</div>
    </Link>
  );
};

export default CardButton;
