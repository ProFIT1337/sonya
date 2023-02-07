import React, { useEffect, useState } from 'react';
import { getInStockProducts } from '../../../functions/getInStockProducts';
import CustomSlider from '../CustomSlider/CustomSlider';
import styles from './InStock.module.scss';
import InStockItem from './InStockItem/InStockItem';

function InStock({ title = 'В наличии на складе' }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getInStockProducts().then((res) => setProducts(res));
  });
  return (
    <div>
      <CustomSlider title={title} SlideElement={InStockItem} data={products} />
    </div>
  );
}
export default InStock;
