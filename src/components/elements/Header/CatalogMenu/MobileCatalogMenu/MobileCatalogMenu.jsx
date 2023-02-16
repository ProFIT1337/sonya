import React from 'react';
import CatalogItem from './CatalogItem/CatalogItem';
import styles from './MobileCatalogMenu.module.scss';

const MobileCatalogMenu = ({ data, activePlace, setActivePlace }) => {
  return (
    <div className={styles.container}>
      {data.map((place) => (
        <CatalogItem place={place} key={place.id} />
      ))}
    </div>
  );
};

export default MobileCatalogMenu;
