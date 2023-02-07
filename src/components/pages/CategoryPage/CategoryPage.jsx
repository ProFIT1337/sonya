import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';

import styles from './CategoryPage.module.scss';
import { getCategory } from '../../../functions/getCategory';
import PayAttention from './PayAttention/PayAttention';
import ProductCard from './ProductCard/ProductCard';
import Pagination from '../../elements/Pagination/Pagination';
import NotFound from '../NotFound/NotFound';

const CategoryPage = () => {
  let params = useParams();
  let slug = params.slug;

  let [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const BREADCRUMBSDATA = [
    { link: '/catalog', text: 'Каталог' },
    { link: '/category/' + slug, text: category?.title },
  ];

  useEffect(() => {
    getCategory(slug).then((res) => {
      setCategory(res || null);
      setPageCount(Math.ceil(res.products.length / 12));
    });
    if (searchParams.get('page')) {
      setCurrentPage(searchParams.get('page'));
    }
  }, [params]);

  function setPage(pageNumber) {
    setSearchParams({ page: pageNumber });
    setCurrentPage(pageNumber);
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }
  if (category !== null) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.breadCrumbs}>
          <BreadCrumbs items={BREADCRUMBSDATA} />
        </div>
        <h2 className={styles.title}>{category?.title}</h2>
        <div className={styles.attention}>
          <PayAttention />
        </div>
        <div className={styles.filters}></div>
        <div className={styles.products}>
          {category &&
            category.products.slice((currentPage - 1) * 12, (currentPage - 1) * 12 + 12).map((product) => (
              <div className={styles.product} key={product.id}>
                <ProductCard product={product} />
              </div>
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
