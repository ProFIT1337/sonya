import React from 'react';
import styles from './OrderItem.module.scss';
import { ReactComponent as Minus } from '../../../../img/orderMinus.svg';
import { ReactComponent as Plus } from '../../../../img/orderPlus.svg';
import PriceElement from '../../../elements/PriceElement/PriceElement';
import { changeProductQuantity, removeProductFromOrder } from '../../../../functions/orderFunctions';
import { useDispatch } from 'react-redux';

const OrderItem = ({ product }) => {
  const dispatch = useDispatch();
  const raiceProductQuantity = () => {
    dispatch(changeProductQuantity(product.product, product.quantity + 1));
  };
  const reduceProductQuantity = () => {
    if (product.quantity < 2) {
      dispatch(removeProductFromOrder(product.product));
    } else {
      dispatch(changeProductQuantity(product.product, product.quantity - 1));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src={product.product.photos[0].photo} alt={product.product.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{product.product.title}</div>
        <div className={styles.description}>{product.product.short_description}</div>
        <div className={styles.vendor_code}>{product.product.vendor_code}</div>
      </div>
      <div className={styles.counter + ' ' + (product.quantity > 1 ? styles.multiply : '')}>
        <div className={styles.counter__minus} onClick={reduceProductQuantity}>
          <Minus />
        </div>
        <div className={styles.counter__value}>{product.quantity}</div>
        <div className={styles.counter__plus} onClick={raiceProductQuantity}>
          <Plus />
        </div>
        {product.quantity > 1 && (
          <div className={styles.counter__cost}>
            <PriceElement value={product.product.new_price} /> / шт
          </div>
        )}
      </div>
      <div className={styles.sum + ' ' + (product.product.old_price ? styles.withOld : '')}>
        <div className={styles.new_price}>
          <PriceElement value={product.product.new_price * product.quantity} />
        </div>
        <div className={styles.old_price}>
          <PriceElement value={product.product.old_price * product.quantity} />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
