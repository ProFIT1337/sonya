import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryItem.module.scss';
import SubcategoryItem from './SubcategoryItem/SubcategoryItem';

function CategoryItem({ category }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.title + ' ' + (isActive ? styles.active : '')} onClick={() => setIsActive(!isActive)}>
        {category.title}
      </button>
      <div className={styles.subcategories}>
        {isActive
          ? category.subcategories.map((subcategory) => (
              <div className={styles.subcategory} key={subcategory.id}>
                <SubcategoryItem subcategory={subcategory} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default CategoryItem;
