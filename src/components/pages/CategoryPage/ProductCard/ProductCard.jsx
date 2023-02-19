import React from 'react';
import styles from './ProductCard.module.scss';
import TransparentButton from '../../../elements/TransparentButton/TransparentButton';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={product.photo} alt={product.title} />
        {/* {product.in_stock && <div className={styles.inStock}>В наличии</div>} */}
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.prices}>
        <div className={styles.new_price}>
          {product.new_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
        </div>
        <div className={styles.old_price}>
          {product.old_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
        </div>
      </div>
      <div className={styles.button}>
        <TransparentButton text='В корзину' onClickFunc={() => {}} />
      </div>
    </div>
  );
};

export default ProductCard;
