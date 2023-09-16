import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useWindowSize from '../../../functions/useWindowSize';
import NotFound from '../NotFound/NotFound';

import MobileProductPage from './MobileProductPage/MobileProductPage';
import DesktopProductPage from './DesktopProductPage/DesktopProductPage';

const ProductPage = ({}) => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 1200;

  const params = useParams();
  const products = useSelector((state) => state.products.products);

  const product = products.find((p) => p.slug === params.slug);

  const [activePhoto, _setActivePhoto] = useState(-1);

  let setActivePhoto = (value) => {
    _setActivePhoto(value);
    if (value > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  let nextPhoto = () => {
    let photos = product.photos;
    let currPhoto = photos.find((ph) => ph.id === activePhoto);
    let indexOfCurrPhoto = photos.indexOf(currPhoto);
    if (indexOfCurrPhoto < photos.length - 1) {
      setActivePhoto(photos[indexOfCurrPhoto + 1].id);
    } else {
      setActivePhoto(photos[0].id);
    }
  };
  let prevPhoto = () => {
    let photos = product.photos;
    let currPhoto = photos.find((ph) => ph.id === activePhoto);
    let indexOfCurrPhoto = photos.indexOf(currPhoto);
    if (indexOfCurrPhoto > 1) {
      setActivePhoto(photos[indexOfCurrPhoto - 1].id);
    } else {
      setActivePhoto(photos[photos.length - 1].id);
    }
  };

  if (product) {
    if (isMobile) {
      return (
        <MobileProductPage
          product={product}
          setActivePhoto={setActivePhoto}
          products={products}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          prevPhoto={prevPhoto}
        />
      );
    } else {
      return (
        <DesktopProductPage
          product={product}
          setActivePhoto={setActivePhoto}
          products={products}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          prevPhoto={prevPhoto}
        />
      );
    }
  } else if (products.length) {
    return <NotFound />;
  }
};

export default ProductPage;
