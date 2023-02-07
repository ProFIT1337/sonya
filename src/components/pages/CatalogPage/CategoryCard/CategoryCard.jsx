import React from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ category }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={category.photo} alt={category.title} />
      </div>
      <div className={styles.title}>{category.title}</div>
    </div>
  );
};

export default CategoryCard;
