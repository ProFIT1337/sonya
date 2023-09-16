import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToOrder } from '../../../../functions/orderFunctions';
import TransparentButton from '../../TransparentButton/TransparentButton';
import styles from './InStockItem.module.scss';

const InStockItem = ({ title, photos, old_price, new_price, slug, short_description, item }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const photo = photos[0];
  return (
    <Link to={'/products/' + slug} className={styles.card}>
      <div className={styles.photo}>{photo && <img src={photo.photo} alt={title} />}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.category}>{short_description}</div>
      <div className={styles.footer}>
        <div className={styles.prices}>
          {old_price && (
            <div className={styles.old_price}>
              {old_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
            </div>
          )}
          <div className={styles.new_price}>
            {new_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
          </div>
        </div>
        <div className={styles.button}>
          <TransparentButton
            text={order[item.id] ? 'В корзине' : 'В корзину'}
            onClickFunc={(e) => {
              e.preventDefault();
              dispatch(addProductToOrder(item));
            }}
            disabled={order[item.id]}
          />
        </div>
      </div>
    </Link>
  );
};

export default InStockItem;
