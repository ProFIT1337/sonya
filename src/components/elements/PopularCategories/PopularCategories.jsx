import React from 'react';
import styles from './PopularCategories.module.scss';
import PopularCategoryCard from './PopularCategoryCard/PopularCategoryCard';
import CustomSlider from '../CustomSlider/CustomSlider';
import { useSelector } from 'react-redux';

const PopularCategories = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className={styles.container}>
      <CustomSlider title='Популярные категории' SlideElement={PopularCategoryCard} data={categories} />
    </div>
  );
};

export default PopularCategories;
