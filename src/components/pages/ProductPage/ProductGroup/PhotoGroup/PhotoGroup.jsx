import React from 'react';
import CustomSlider from '../../../../elements/CustomSlider/CustomSlider';
import styles from './PhotoGroup.module.scss';
import PhotoGroupItem from './PhotoGroupItem/PhotoGroupItem';

const PhotoGroup = ({ group, productId }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{group.title}: </h3>
      <div className={styles.active}>{group.products.find((item) => item.product_id === productId)?.title}</div>
      <div className={styles.products}>
        <CustomSlider data={group.products} SlideElement={PhotoGroupItem} smallArows={true} />
      </div>
    </div>
  );
};

export default PhotoGroup;
