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
const Header = () => {
  const [catalogData, setCatalogData] = useState([]);
  const [isCatalogActive, setIsCatalogActive] = useState(false);

  useEffect(() => {
    getCatalog().then((res) => setCatalogData(res));
  });
  return (
    <div
      className={styles.container}
      onPointerLeave={() => {
        setIsCatalogActive(false);
      }}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <LogoButton />
        </div>
        <div
          className={styles.catalog}
          onPointerEnter={() => {
            setIsCatalogActive(true);
          }}>
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
