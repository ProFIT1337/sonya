import React from 'react';
import { useSelector } from 'react-redux';
import CustomSlider from '../CustomSlider/CustomSlider';
import styles from './InStock.module.scss';
import InStockItem from './InStockItem/InStockItem';

function InStock({ title = 'В наличии на складе' }) {
  const products = useSelector((state) => state.products.products);

  if (products) {
    return (
      <div className={styles.products}>
        <CustomSlider title={title} SlideElement={InStockItem} data={products} />
      </div>
    );
  }
}
export default InStock;
