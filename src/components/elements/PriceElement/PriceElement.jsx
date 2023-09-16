import React from 'react';

const PriceElement = ({ value }) => {
  return value?.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ') + ' ₽';
};

export default PriceElement;
