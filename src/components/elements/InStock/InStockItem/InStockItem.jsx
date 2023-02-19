import React from 'react';
import TransparentButton from '../../TransparentButton/TransparentButton';
import styles from './InStockItem.module.scss';

const InStockItem = ({ title, photo, category, old_price, new_price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.footer}>
        <div className={styles.prices}>
          <div className={styles.old_price}>
            {old_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
          </div>
          <div className={styles.new_price}>
            {new_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
          </div>
        </div>
        <div className={styles.button}>
          <TransparentButton text='В корзину' onClickFunc={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default InStockItem;
