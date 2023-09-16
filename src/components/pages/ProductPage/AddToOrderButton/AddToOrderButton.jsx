import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToOrder } from '../../../../functions/orderFunctions';
import styles from './AddToOrderButton.module.scss';

const AddToOrderButton = ({ product }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  return (
    <button
      type='button'
      className={styles.addOrder}
      disabled={order[product.id]}
      onClick={() => {
        dispatch(addProductToOrder(product));
      }}>
      {order[product.id] ? 'В корзине' : 'В корзину'}
    </button>
  );
};

export default AddToOrderButton;
