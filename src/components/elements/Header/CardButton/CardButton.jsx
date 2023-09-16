import React from 'react';
import styles from './CardButton.module.scss';
import { ReactComponent as CardImage } from '../../../../img/card.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CardButton = () => {
  const order = useSelector((state) => state.order.order);
  let orderCounter = 0;
  for (let product in order) {
    orderCounter += order[product].quantity;
  }
  return (
    <Link to='/order' className={styles.button}>
      {orderCounter > 0 && <div className={styles.bubble}>{orderCounter}</div>}
      <div className={styles.img}>
        <CardImage />
      </div>
      <div className={styles.text}>Корзина</div>
    </Link>
  );
};

export default CardButton;
