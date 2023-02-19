import React from 'react';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import styles from './AboutPage.module.scss';

import p1 from '../../../img/testImages/promo_main.png';
import p2 from '../../../img/testImages/promo_secondary2.png';

const BREADCRUMBSDATA = [{ link: '/about', text: 'О нас' }];
function DesktopAboutPage() {
  return (
    <div className={styles.container}>
      <BreadCrumbs items={BREADCRUMBSDATA} />
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.content}>
        <div className={styles.texts}>
          <div className={styles.block}>
            <div className={styles.block__text}>
              IKEA Krasnoyarsk - товары из Икеи в любую точку России, IKEA Krasnoyarsk - товары из Икеи в любую точку
              РоссииIKEA Krasnoyarsk - товары из Икеи в любую точку РоссииIKEA Krasnoyarsk - товары из Икеи в любую
              точку IKEA Krasnoyarsk - товары из Икеи в любую точку РоссииIKEA Krasnoyarsk - товар из Икеи в любую точку
            </div>
          </div>
          <div className={styles.block} id='howMakeOrder'>
            <div className={styles.block__title}>Как заказать?</div>
            <div className={styles.block__text}>
              <ol>
                <li>Добавьте товары в корзину</li>
                <li>Оформите заказ, нажав кнопку “Оформить заказ”</li>
                <li>Заполните все поля в форме “Оформление заказа”</li>
                <li>Менеджер свяжется с вами в ближайшее время для подтверждения и окончания оформления заказа</li>
              </ol>
            </div>
          </div>
          <div className={styles.block} id='delivery'>
            <div className={styles.block__title}>Доставка и оплата</div>
            <div className={styles.block__text}>
              Доставка по г. Красноярск Доставка по Красноярску осуществляется в течение 48 часов после подтверждения
              заказа. Стоимость доставки по г. Красноярск - 300 рублей, при заказе от 3000 рублей доставка бесплатная.
              Подем на эт Самовывоз Вы можете забрать покупки самостоятельно в магазине по адресу г. Красноярск, ул.
              Вавилова, д.3, стр.9. Доставка по России Доставка заказов по России рассчитывается индивидуально -
              согласно тарифам транспортных и курьерских компаний. Стоимость доставки по России от 350 рублей, и будет
              зависеть от веса и габарита выбранного товара. Сроки доставки по России от 4 дней. В зависимости от вашего
              региона проживания, доставка занимает разное время. После оформления заказа на сайте с вами свяжется
              менеджер для уточнения деталей доставки. Напишите адрес доставки по России в комментарии к заказу.
              <br /> Оплата
              <br />
              Оплата покупок производится в магазине при самовывозе или курьеру при доставке. Способы оплаты:
              <ul>
                <li>Банковская карта (все платежные системы, включая Visa, Mastercard, Maestro, МИР)</li>
                <li>Бесконтактные платежные системы (Apple Pay, Google Pay)</li>
                <li>Наличные деньги</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.imgs}>
          <img src={p1} alt='' />
          <img src={p2} alt='' />
        </div>
      </div>
    </div>
  );
}

export default DesktopAboutPage;
