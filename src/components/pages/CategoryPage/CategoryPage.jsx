import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';

import styles from './CategoryPage.module.scss';
import PayAttention from './PayAttention/PayAttention';
import ProductCard from './ProductCard/ProductCard';
import Pagination from '../../elements/Pagination/Pagination';
import NotFound from '../NotFound/NotFound';
import useWindowSize from '../../../functions/useWindowSize';
import BackButton from '../../elements/BackButton/BackButton';
import { useSelector } from 'react-redux';

const PRODUCTS_PER_PAGE = 12;

const CategoryPage = () => {
  let params = useParams();
  let slug = params.slug;
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = useSelector((state) => state.categories.categories);
  const category = categories.find((c) => c.slug === slug);
  const products = useSelector((state) => state.products.products);

  // const [category, setCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(
    products.filter((p) => {
      let cats = p.categories;
      let cats_ids = cats.map((c) => c.id);
      return cats_ids.includes(category.id);
    }).length / PRODUCTS_PER_PAGE
  );

  const [windowWidth] = useWindowSize();

  let isMobile = windowWidth < 1200;

  const BREADCRUMBSDATA = [
    { link: '/catalog', text: 'Каталог' },
    { link: '/category/' + slug, text: category?.title },
  ];

  function setPage(pageNumber) {
    setCurrentPage(pageNumber);
    let newParams = {};
    for (let item of searchParams) {
      newParams[item[0]] = item[1];
    }
    newParams['page'] = pageNumber;
    setSearchParams(newParams);
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }
  if (category !== null) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.breadCrumbs}>
          {isMobile ? <BackButton text='Каталог' link='/catalog' /> : <BreadCrumbs items={BREADCRUMBSDATA} />}
        </div>
        <h2 className={styles.title}>{category?.title}</h2>
        <div className={styles.attention}>
          <PayAttention />
        </div>
        <div className={styles.filters}></div>
        <div className={styles.products}>
          {category &&
            products &&
            products
              .filter((p) => {
                let cats = p.categories;
                let cats_ids = cats.map((c) => c.id);
                return cats_ids.includes(category.id);
              })
              .slice((currentPage - 1) * PRODUCTS_PER_PAGE, (currentPage - 1) * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE)
              .map((product) => (
                <div className={styles.product} key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          {[1, 2].map((i) => (
            <div className={styles.product + ' ' + styles.product_blank} key={i}></div>
          ))}
        </div>
        <div className={styles.description}>{category?.description}</div>
        {pageCount > 1 && (
          <div className={styles.pagination}>
            <Pagination currentPage={currentPage} pageCount={pageCount} setPage={setPage} />
          </div>
        )}
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default CategoryPage;
