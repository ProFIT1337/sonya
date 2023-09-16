import React from 'react';
import styles from './ProductCard.module.scss';
import TransparentButton from '../../../elements/TransparentButton/TransparentButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToOrder } from '../../../../functions/orderFunctions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  return (
    <Link to={'/products/' + product.slug} className={styles.wrapper}>
      <div className={styles.img}>
        {product.photos.length > 0 && <img src={product.photos[0].photo} alt={product.title} />}
        {/* {product.in_stock && <div className={styles.inStock}>В наличии</div>} */}
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.short_description}</div>
      <div className={styles.prices}>
        <div className={styles.new_price}>
          {product.new_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
        </div>
        {product.old_price && (
          <div className={styles.old_price}>
            {product.old_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
          </div>
        )}
      </div>
      <div className={styles.button}>
        <TransparentButton
          text={order[product.id] ? 'В корзине' : 'В корзину'}
          onClickFunc={(e) => {
            e.preventDefault();
            dispatch(addProductToOrder(product));
          }}
          disabled={order[product.id]}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
