import React from 'react';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import styles from './ContactsPage.module.scss';
import Map from '../../elements/Map/Map';

const BREADCRUMBSDATA = [{ link: '/contacts', text: 'Контакты' }];

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <BreadCrumbs items={BREADCRUMBSDATA} />
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.contacts}>
        <div className={styles.contacts__item}>
          <div className={styles.item__title}>Адрес</div>
          <div className={styles.item__value}>Красноярский край, г. Красноярск, ул. Академика Вавилова, д.3/9</div>
        </div>
        <div className={styles.contacts__item}>
          <div className={styles.item__title}>Режим работы</div>
          <div className={styles.item__value}>
            Пн-Пт: с 10:00 до 20:00 <br /> Сб: с 10:00 до 18:00 <br /> Вс: с 11:00 до 16:00
          </div>
        </div>
        <div className={styles.contacts__item}>
          <div className={styles.item__title}>Телефон</div>
          <div className={styles.item__value}>+7 (391) 205-10-16</div>
        </div>
        <div className={styles.contacts__item}>
          <div className={styles.item__title}>Почта</div>
          <div className={styles.item__value}>info@dostavkakrsk.ru</div>
        </div>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.requisites}>
        <div className={styles.requisites__title}>Реквизиты</div>
        <div className={styles.contacts}>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>Полное наименование</div>
            <div className={styles.item__value}>Общество с ограниченной ответственностью «Уют с доставкой»</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>Юридический адрес</div>
            <div className={styles.item__value}>г. Красноярск, ул. Академика Вавилова, д.3, стр. 9</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>ИНН</div>
            <div className={styles.item__value}>2464116538</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>ОГРН</div>
            <div className={styles.item__value}>1142468113754</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>КПП</div>
            <div className={styles.item__value}>246401001</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>Расчетный счет №</div>
            <div className={styles.item__value}>40702810731000099228</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>Банк</div>
            <div className={styles.item__value}>Восточно-Сибирский банк Сбербанка России (ОАО)</div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.item__title}>БИК</div>
            <div className={styles.item__value}>040407627</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
