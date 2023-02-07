import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ items }) => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.link}>
        Икея Красноярск
      </Link>
      {items &&
        items.map((item, idx) => (
          <Link className={styles.link} to={item.link} key={idx}>
            {item.text}
          </Link>
        ))}
    </div>
  );
};

export default BreadCrumbs;
