import React, { useState } from 'react';
import styles from './CatalogItem.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';

function CatalogItem({ place }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.title + ' ' + (isActive ? styles.active : '')} onClick={() => setIsActive(!isActive)}>
        {place.title}
      </button>
      <div className={styles.categories}>
        {isActive &&
          place.categories.map((category) => (
            <div className={styles.category} key={category.id}>
              <CategoryItem category={category} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CatalogItem;
