import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PriceElement from '../../../elements/PriceElement/PriceElement';
import TransparentButton from '../../../elements/TransparentButton/TransparentButton';
import OrderCheckbox from '../OrderCheckbox/OrderCheckbox';
import OrderingInput from '../OrderingInput/OrderingInput';
import OrderRoundBox from '../OrderRoundBox/OrderRoundBox';
import styles from './OrderingModal.module.scss';

const FIO_FIELD = 'ФИО';
const PHONE_FIELD = 'Телефон';
const EMAIL_FIELD = 'E-mail';
const STREET_FIELD = 'Улица';
const HOUSE_FIELD = 'Дом';
const FLAT_FIELD = 'Квартира';
const TOWN_FIELD = 'Город';
const COMMENT_FIELD = 'Комментарий';

const OrderingModal = () => {
  const order = useSelector((state) => state.order.order);
  console.log(order);
  let orderSum = 0;
  let orderCounter = 0;

  for (let productID in order) {
    const product = order[productID];
    orderCounter += product.quantity;
    orderSum += product.quantity * product.product.new_price;
  }
  const [fieldsData, setFieldsData] = useState({ lift: false, assembly: false });
  const [deliveryType, _setDeliveryType] = useState('');

  const setDataFromField = (fieldName, value) => {
    let oldFieldsData = fieldsData;
    oldFieldsData[fieldName] = value;
    setFieldsData(oldFieldsData);
  };

  const setDeliveryType = (event) => {
    setDataFromField('delivery', event.target.id);
    _setDeliveryType(event.target.id);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = '');
  }, []);

  return (
    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modalTitle}>Оформление заказа</div>
      <div className={styles.modalDescription}>
        После оформления заказа на сайте менеджер свяжется с вами для уточнения деталей
      </div>
      <div className={styles.fio}>
        <OrderingInput title={FIO_FIELD} onInputFunc={(value) => setDataFromField(FIO_FIELD, value)} />
      </div>
      <div className={styles.phone}>
        <OrderingInput title={PHONE_FIELD} onInputFunc={(value) => setDataFromField(PHONE_FIELD, value)} />
      </div>
      <div className={styles.email}>
        <OrderingInput title={EMAIL_FIELD} onInputFunc={(value) => setDataFromField(EMAIL_FIELD, value)} />
      </div>
      <div className={styles.delivery}>
        <div className={styles.deliveryTitle}>Выберите способ доставки:</div>
        <div className={styles.deliveryItem}>
          <div className={styles.deliveryCheckbox}>
            <OrderRoundBox
              checkboxValue='delivery_pickup'
              checkboxName='delivery'
              checkboxId='delivery_pickup'
              clickFunc={setDeliveryType}
              checked={deliveryType === 'delivery_pickup'}
            />
          </div>
          <label htmlFor={'delivery_pickup'}>
            <div className={styles.deliveryCheckboxTitle}>Самовывоз</div>
            <div className={styles.deliveryText}>
              г. Красноярск, ул. Вавилова, д. 3, стр. 9 <br />
              Пн-Пт: с 10:00 до 20:00 Сб: с 10:00 до 18:00 Вс: с 11:00 до 16:00
            </div>
          </label>
        </div>
        <div className={styles.deliveryItem}>
          <div className={styles.deliveryCheckbox}>
            <OrderRoundBox
              checkboxValue='delivery_delivery'
              checkboxName='delivery'
              checkboxId='delivery_delivery'
              clickFunc={setDeliveryType}
              checked={deliveryType === 'delivery_delivery'}
            />
          </div>
          <label htmlFor={'delivery_delivery'}>
            <div className={styles.deliveryCheckboxTitle}>Доставка по Красноярску</div>
            <div className={styles.deliveryText}>Доставка рассчитывается индивидуально</div>
          </label>
        </div>
        {deliveryType === 'delivery_delivery' && (
          <>
            <div className={styles.street}>
              <OrderingInput title={STREET_FIELD} onInputFunc={(value) => setDataFromField(STREET_FIELD, value)} />
            </div>
            <div className={styles.house}>
              <OrderingInput title={HOUSE_FIELD} onInputFunc={(value) => setDataFromField(HOUSE_FIELD, value)} />
            </div>
            <div className={styles.flat}>
              <OrderingInput title={FLAT_FIELD} onInputFunc={(value) => setDataFromField(FLAT_FIELD, value)} />
            </div>
            <div className={styles.lift}>
              <OrderCheckbox
                checkboxId='lift'
                clickFunc={(e) => {
                  setDataFromField('lift', e.target.checked);
                }}
              />
              <label htmlFor='lift' className={styles.liftText}>
                Наличие грузового лифта в доме
              </label>
            </div>
            <div className={styles.assembly}>
              <OrderCheckbox
                checkboxId='assembly'
                clickFunc={(e) => {
                  setDataFromField('assembly', e.target.checked);
                }}
              />
              <label htmlFor='assembly' className={styles.assemblyText}>
                Наличие грузового лифта в доме
              </label>
            </div>
          </>
        )}
        <div className={styles.deliveryItem}>
          <div className={styles.deliveryCheckbox}>
            <OrderRoundBox
              checkboxValue='delivery_delivery_rus'
              checkboxName='delivery'
              checkboxId='delivery_delivery_rus'
              clickFunc={setDeliveryType}
              checked={deliveryType === 'delivery_delivery_rus'}
            />
          </div>
          <label htmlFor={'delivery_delivery_rus'}>
            <div className={styles.deliveryCheckboxTitle}>Доставка по России</div>
            <div className={styles.deliveryText}>
              Доставка рассчитывается индивидуально <br />
              Через компании доставки: CDEK, Pickpoint, Boxberry
            </div>
          </label>
        </div>
        {deliveryType === 'delivery_delivery_rus' && (
          <>
            <div className={styles.town}>
              <OrderingInput title={TOWN_FIELD} onInputFunc={(value) => setDataFromField(TOWN_FIELD, value)} />
            </div>
            <div className={styles.street}>
              <OrderingInput title={STREET_FIELD} onInputFunc={(value) => setDataFromField(STREET_FIELD, value)} />
            </div>
            <div className={styles.house}>
              <OrderingInput title={HOUSE_FIELD} onInputFunc={(value) => setDataFromField(HOUSE_FIELD, value)} />
            </div>
            <div className={styles.flat}>
              <OrderingInput title={FLAT_FIELD} onInputFunc={(value) => setDataFromField(FLAT_FIELD, value)} />
            </div>
          </>
        )}
      </div>

      <div className={styles.card}>
        <div className={styles.card_title}>Корзина, {orderCounter} шт</div>
        <div className={styles.card_items}>
          {Object.keys(order).map((productID) => (
            <div className={styles.card_item} key={productID}>
              <div className={styles.product__image}>
                <img src={order[productID].product.photos[0].photo} alt='' />
              </div>
              <div className={styles.product__info}>
                <div className={styles.product__title}>{order[productID].product.title}</div>
                <div className={styles.product_description}>{order[productID].product.short_description}</div>
                <div className={styles.vendor_code}>Артикул: {order[productID].product.vendor_code}</div>
              </div>
              <div className={styles.right_column}>
                <div className={styles.price}>
                  <PriceElement value={order[productID].product.new_price} />
                </div>
                <div className={styles.product__counter}>{order[productID].quantity} шт.</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.total}>
        <div className={styles.total__title}>Итого</div>
        <div className={styles.total__price}>
          <PriceElement value={orderSum} />
        </div>
      </div>

      <div className={styles.comment}>
        <OrderingInput title={COMMENT_FIELD} onInputFunc={(value) => setDataFromField(COMMENT_FIELD, value)} />
      </div>

      <div className={styles.submit}>
        <TransparentButton text='Отправить' onClickFunc={() => console.log(fieldsData)} />
      </div>

      <div className={styles.policy}>
        Нажимая на кнопку “отправить” я соглашаюсь <Link to='/confidential'> с политикой конфидициальности</Link>
      </div>
    </div>
  );
};

export default OrderingModal;
