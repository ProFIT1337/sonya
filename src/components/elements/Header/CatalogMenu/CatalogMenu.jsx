import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCatalog } from '../../../../functions/getCatalog';
import useWindowSize from '../../../../functions/useWindowSize';
import DesktopCatalogMenu from './DesktopCatalogMenu/DesktopCatalogMenu';
import MobileCatalogMenu from './MobileCatalogMenu/MobileCatalogMenu';
const CatalogMenu = () => {
  const catalog = useSelector((state) => state.catalog.catalog);

  const [activePlace, setActivePlace] = useState(null);

  const [windowWidth] = useWindowSize();
  let isMobile = windowWidth < 1200;

  useEffect(() => {
    if (!isMobile) {
      setActivePlace(catalog[0]);
    }
  }, []);

  return isMobile ? (
    <MobileCatalogMenu data={catalog} activePlace={activePlace} setActivePlace={setActivePlace} />
  ) : (
    <DesktopCatalogMenu data={catalog} activePlace={activePlace} setActivePlace={setActivePlace} />
  );
};

export default CatalogMenu;
