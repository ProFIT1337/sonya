import React, { useEffect, useState } from 'react';
import styles from './PayAttention.module.scss';

import { ReactComponent as Cross } from '../../../../img/payAttention/cross.svg';

const PayAttention = () => {
  const [open, _setOpen] = useState(1);

  useEffect(() => {
    let savedValue = sessionStorage.getItem('CategoryPayAttention');
    if (savedValue !== null) {
      _setOpen(!!+savedValue);
    }
  });

  function setOpen(value) {
    sessionStorage.setItem('CategoryPayAttention', value);
    _setOpen(value);
  }

  return (
    open && (
      <div className={styles.wrapper}>
        <div className={styles.text}>
          IKEA приостановила свою работу на территории Росиийской федерации, но даже сейчас в наличи у нас есть многие
          товары из каталога. <br /> Мы рады помочь сделать вашу квартиру красивее и уютнее!
        </div>
        <div
          className={styles.cross}
          onClick={() => {
            setOpen(0);
          }}>
          <Cross />
        </div>
      </div>
    )
  );
};
export default PayAttention;
