import React, { useEffect, useState } from 'react';
import CatalogButton from './CatalogButton/CatalogButton';
import ContactsButton from './ContactsButton/ContactsButton';
import styles from './Header.module.scss';
import LogoButton from './LogoButton/LogoButton';
import SearchField from './SearchField/SearchField';
import AboutButton from './AboutButton/AboutButton';
import CardButton from './CardButton/CardButton';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import { getCatalog } from '../../../functions/getCatalog';
import useWindowSize from '../../../functions/useWindowSize';
import { useLocation } from 'react-router-dom';
const Header = () => {
  let location = useLocation();
  const [catalogData, setCatalogData] = useState([]);
  const [isCatalogActive, setIsCatalogActive] = useState(false);
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    getCatalog().then((res) => setCatalogData(res));
  });
  useEffect(() => {
    setIsCatalogActive(false);
    console.log(123);
  }, [location.pathname]);

  return (
    <div
      className={styles.container}
      onPointerLeave={
        windowWidth >= 1200
          ? () => {
              setIsCatalogActive(false);
            }
          : null
      }>
      <header className={styles.header}>
        <div className={styles.logo}>
          <LogoButton />
        </div>
        <div
          className={styles.catalog}
          onPointerEnter={
            windowWidth >= 1200
              ? () => {
                  setIsCatalogActive(true);
                }
              : null
          }
          onPointerUp={
            windowWidth < 1200
              ? () => {
                  if (isCatalogActive) {
                    setIsCatalogActive(false);
                  } else {
                    setIsCatalogActive(true);
                  }
                }
              : null
          }>
          <CatalogButton />
        </div>
        <div className={styles.search}>
          <SearchField />
        </div>
        <div className={styles.contacts}>
          <ContactsButton />
        </div>
        <div className={styles.about}>
          <AboutButton />
        </div>
        <div className={styles.card}>
          <CardButton />
        </div>
      </header>
      <div className={styles.catalogMenu}>{isCatalogActive && <CatalogMenu data={catalogData} />}</div>
    </div>
  );
};

export default Header;
