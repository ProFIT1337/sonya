import React from 'react';
import styles from './Pluses.module.scss';
import { ReactComponent as Car } from '../../../../img/pluses/Car.svg';
import { ReactComponent as Chair } from '../../../../img/pluses/Chair.svg';
import { ReactComponent as Drill } from '../../../../img/pluses/Drill.svg';

const DATA = [
  { id: 1, photo: Car, title: 'Доставка до двери', description: 'Курьер доставит грузв удобное время' },
  { id: 2, photo: Chair, title: 'Самовывоз', description: 'Все товары доступны в офлайн магазине' },
  { id: 3, photo: Drill, title: 'Сборка на месте', description: 'Мастер соберет мебель сразу после доставки' },
];

const Pluses = () => {
  return (
    <div className={styles.container}>
      {DATA.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.photo}>
            <item.photo />
          </div>
          <div className={styles.texts}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pluses;
