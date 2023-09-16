import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoGroupItem.module.scss';

const PhotoGroupItem = ({ title, photo, slug }) => {
  return (
    <Link to={'/products/' + slug} className={styles.wrapper}>
      <img src={photo} alt={title} />
    </Link>
  );
};

export default PhotoGroupItem;
