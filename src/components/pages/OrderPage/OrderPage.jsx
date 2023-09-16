import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromOrder } from '../../../functions/orderFunctions';
import InStock from '../../elements/InStock/InStock';
import PriceElement from '../../elements/PriceElement/PriceElement';
import OrderCheckbox from './OrderCheckbox/OrderCheckbox';
import OrderingModal from './OrderingModal/OrderingModal';
import OrderItem from './OrderItem/OrderItem';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);

  const [isOrderingModal, setIsOrderingModal] = useState(false);

  const toggleOrderingModal = () => {
    setIsOrderingModal(!isOrderingModal);
  };

  let orderSum = 0;
  let orderCounter = 0;
  let orderSumWithoutSale = 0;

  for (let productID in order) {
    const product = order[productID];
    orderCounter += product.quantity;
    orderSum += product.quantity * product.product.new_price;
    orderSumWithoutSale += product.product.old_price
      ? product.quantity * product.product.old_price
      : product.product.new_price;
  }

  const sale = Math.abs(orderSumWithoutSale - orderSum);

  const [checkedProducts, setCheckedProducts] = useState([]);

  const checkAll = (event) => {
    if (event.target.checked) {
      setCheckedProducts(Object.keys(order));
    } else {
      setCheckedProducts([]);
    }
  };
  const changeProductCheked = (productID) => {
    if (checkedProducts.includes(productID)) {
      setCheckedProducts(checkedProducts.filter((pr) => pr !== productID));
    } else {
      setCheckedProducts([...checkedProducts, productID]);
    }
  };
  const deleteChoiced = () => {
    for (let productID of checkedProducts) {
      dispatch(removeProductFromOrder(order[productID].product));
    }
    setCheckedProducts([]);
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.buttons}>
        <div className={styles.selectAll}>
          <OrderCheckbox
            checkboxId='selectAll'
            clickFunc={(event) => {
              checkAll(event);
            }}
            checked={Object.keys(order).filter((pr) => !checkedProducts.includes(pr)).length === 0}
          />
          <label htmlFor='selectAll'>Выбрать все</label>
        </div>
        <div className={styles.delete} onClick={deleteChoiced}>
          Удалить выбранные
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.products}>
          {Object.keys(order).map((productID) => (
            <div className={styles.product} key={productID}>
              <OrderCheckbox
                checked={checkedProducts.includes(productID)}
                clickFunc={() => changeProductCheked(productID)}
              />
              <OrderItem product={order[productID]} />
            </div>
          ))}
        </div>
        <div className={styles.menu}>
          <div className={styles.sum}>
            <div className={styles.sum__title}>Итого</div>
            <div className={styles.sum__value}>
              <PriceElement value={orderSum} />
            </div>
          </div>
          <div className={styles.productsCount}>
            <div className={styles.productsCount__title}>Товары, {orderCounter} шт.</div>
            <div className={styles.productsCount__value}>
              <PriceElement value={orderSumWithoutSale} />
            </div>
          </div>
          <div className={styles.sale}>
            <div className={styles.sale__title}>Скидка</div>
            <div className={styles.sale__value}>
              - <PriceElement value={sale} />
            </div>
          </div>
          <button className={styles.makeOrder} onClick={() => toggleOrderingModal()}>
            Оформить заказ
          </button>
        </div>
      </div>
      <div className={styles.more}>
        <InStock title='Вам может быть интересно' />
      </div>
      {isOrderingModal && (
        <div className={styles.orderingModal} onClick={toggleOrderingModal}>
          <OrderingModal />
        </div>
      )}
    </div>
  );
};

export default OrderPage;
