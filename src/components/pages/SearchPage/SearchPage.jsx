import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedProducts } from '../../../functions/getSearchedProducts';
import NoResults from './NoResults/NoResults';
import ResultProducts from './ResultProducts/ResultProducts';
import styles from './SearchPage.module.scss';

const PRODUCTS_PER_PAGE = 12;

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchString = searchParams.get('search');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getSearchedProducts(searchString).then((rez) => setSearchResults(rez));
    setPage(1);
  }, [searchString]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(searchResults.length / PRODUCTS_PER_PAGE);

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

  return (
    <div>
      <h2 className={styles.title}>Результаты поиска “{searchString}”</h2>
      {searchResults.length > 0 ? (
        <ResultProducts
          searchResults={searchResults}
          currentPage={currentPage}
          PRODUCTS_PER_PAGE={PRODUCTS_PER_PAGE}
          pageCount={pageCount}
          setPage={setPage}
        />
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default SearchPage;
