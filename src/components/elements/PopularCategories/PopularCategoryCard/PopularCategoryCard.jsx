import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PopularCategoryCard.module.scss';

const PopularCategoryCard = ({ title, photo, slug }) => {
  let navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate('/categories/' + slug);
      }}>
      <div className={styles.photo}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default PopularCategoryCard;
