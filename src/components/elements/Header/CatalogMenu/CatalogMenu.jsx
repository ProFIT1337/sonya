import React, { useEffect, useState } from 'react';
import useWindowSize from '../../../../functions/useWindowSize';
import styles from './CatalogMenu.module.scss';
import DesktopCatalogMenu from './DesktopCatalogMenu/DesktopCatalogMenu';
import MobileCatalogMenu from './MobileCatalogMenu/MobileCatalogMenu';
const CatalogMenu = ({ data }) => {
  const [activePlace, setActivePlace] = useState(null);

  const [windowWidth] = useWindowSize();
  let isMobile = windowWidth < 1200;

  useEffect(() => {
    if (!isMobile) {
      setActivePlace(data[0]);
    }
  }, [data]);

  return isMobile ? (
    <MobileCatalogMenu data={data} activePlace={activePlace} setActivePlace={setActivePlace} />
  ) : (
    <DesktopCatalogMenu data={data} activePlace={activePlace} setActivePlace={setActivePlace} />
  );
};

export default CatalogMenu;
