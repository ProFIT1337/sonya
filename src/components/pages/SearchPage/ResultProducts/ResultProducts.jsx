import React from 'react';
import Pagination from '../../../elements/Pagination/Pagination';
import ProductCard from '../../CategoryPage/ProductCard/ProductCard';
import styles from './ResultProducts.module.scss';

const ResultProducts = ({ searchResults, currentPage, PRODUCTS_PER_PAGE, pageCount, setPage }) => {
  return (
    <div>
      <div className={styles.counter}>Найдено {searchResults.length} товаров</div>
      <div className={styles.products}>
        {searchResults &&
          searchResults
            .slice((currentPage - 1) * PRODUCTS_PER_PAGE, (currentPage - 1) * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE)
            .map((product) => (
              <div className={styles.product} key={product.id}>
                <ProductCard product={product} />
                <br />
              </div>
            ))}
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.product + ' ' + styles.product__empty}></div>
        ))}
      </div>
      {pageCount > 1 && (
        <div className={styles.pagination}>
          <Pagination currentPage={currentPage} pageCount={pageCount} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default ResultProducts;
