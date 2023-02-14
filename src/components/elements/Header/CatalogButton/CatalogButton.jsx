import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../../functions/useWindowSize';
import styles from './CatalogButton.module.scss';
const CatalogButton = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  return isMobile ? (
    <div className={styles.mobileButton}>
      <div className={styles.burger}></div>
    </div>
  ) : (
    <Link to='/catalog' className={styles.button}>
      <div className={styles.text}>Каталог</div>
    </Link>
  );
};

export default CatalogButton;
