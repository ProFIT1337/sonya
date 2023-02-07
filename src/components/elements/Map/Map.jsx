import React from 'react';
import styles from './Map.module.scss';
const Map = () => {
  return (
    <iframe
      src='https://yandex.ru/map-widget/v1/?um=constructor%3Ad95dd155980fa6dd4fe4f547d8d394f6e64c93fea3780377e931d90f17e6fa5b&amp;source=constructor'
      width='100%'
      height='400'
      frameborder='0'></iframe>
  );
};

export default Map;
