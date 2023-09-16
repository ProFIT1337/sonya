import React from 'react';
import PhotoGroup from './PhotoGroup/PhotoGroup';
import styles from './ProductGroup.module.scss';
import SelectGroup from './SelectGroup/SelectGroup';

const ProductGroup = ({ group, productId }) => {
  if (group.is_photo_group) {
    return (
      <div className={styles.wrapper}>
        <PhotoGroup group={group} productId={productId} />
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <SelectGroup group={group} productId={productId} />
      </div>
    );
  }
};

export default ProductGroup;
