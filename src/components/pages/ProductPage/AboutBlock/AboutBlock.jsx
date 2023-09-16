import React, { useState } from 'react';
import { useEffect } from 'react';
import useWindowSize from '../../../../functions/useWindowSize';
import DesktopAboutBlock from './DesktopAboutBlock/DesktopAboutBlock';
import MobileAboutBlock from './MobileAboutBlock/MobileAboutBlock';

const MODULES = [
  [1, 'Характеристики', 'c'],
  [2, 'Упаковка', 'p'],
  [3, 'Полезно знать', 'u'],
];

const AboutBlock = ({ product }) => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 1200;

  const [activeModule, setActiveModule] = useState(MODULES[0]);

  let specificationsCategories = [];
  const specifictations = product.specifications;

  specifictations.forEach((spec) => {
    if (!specificationsCategories.find((cat) => cat.id === spec.category.id)) {
      specificationsCategories.unshift(spec.category);
      specificationsCategories.find((cat) => cat.id === spec.category.id).specs = [spec];
    } else {
      specificationsCategories.find((cat) => cat.id === spec.category.id).specs.unshift(spec);
    }
  });

  useEffect(() => {
    setActiveModule(isMobile ? [] : MODULES[0]);
  }, [isMobile]);

  if (isMobile) {
    return (
      <MobileAboutBlock
        MODULES={MODULES}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        specificationsCategories={specificationsCategories}
      />
    );
  } else {
    return (
      <DesktopAboutBlock
        MODULES={MODULES}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        specificationsCategories={specificationsCategories}
      />
    );
  }
};

export default AboutBlock;
