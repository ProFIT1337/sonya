import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SubcategoryItem.module.scss';

function SubcategoryItem({ subcategory }) {
  return (
    <Link to={'/categories/' + subcategory.slug} className={styles.title}>
      {subcategory.title}
    </Link>
  );
}

export default SubcategoryItem;
