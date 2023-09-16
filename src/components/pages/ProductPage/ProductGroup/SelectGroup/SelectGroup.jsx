import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SelectGroup.module.scss';

const SelectGroup = ({ group, productId }) => {
  const [isChoisesActive, setIsChoicesActive] = useState(false);
  useEffect(() => {
    setIsChoicesActive(false);
  }, [productId]);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{group.title}</h3>
      <div className={styles.choicesContainer}>
        <div
          className={styles.activeChoice + ' ' + (isChoisesActive ? styles.active : '')}
          onClick={() => {
            setIsChoicesActive(!isChoisesActive);
          }}>
          {group.products.find((it) => it.product_id === productId).title}
        </div>
        {isChoisesActive && (
          <div className={styles.choices}>
            {group.products.map((product) => (
              <Link
                to={'/products/' + product.slug}
                className={styles.choice + ' ' + (product.product_id === productId ? styles.active : '')}>
                <div className={styles.choiceTitle}>{product.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectGroup;
