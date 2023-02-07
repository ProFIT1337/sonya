import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CatalogButton.module.scss';
const CatalogButton = () => {
  return (
    <Link to='/catalog' className={styles.button}>
      <div className={styles.text}>Каталог</div>
    </Link>
  );
};

export default CatalogButton;
