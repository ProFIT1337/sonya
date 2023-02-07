import React, { useEffect, useState } from 'react';
import styles from './PopularCategories.module.scss';
import { getPopularCategories } from '../../../functions/getPopularCategories';
import PopularCategoryCard from './PopularCategoryCard/PopularCategoryCard';
import CustomSlider from '../CustomSlider/CustomSlider';

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getPopularCategories().then((res) => {
      setCategories(res);
    });
  });

  return (
    <div className={styles.container}>
      <CustomSlider title='Популярные категории' SlideElement={PopularCategoryCard} data={categories} />
    </div>
  );
};

export default PopularCategories;
