import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransparentButton from '../../../../elements/TransparentButton/TransparentButton';
import styles from '../AnotherArticles.module.scss';

const AnotherArticleItem = ({ photo, title, description, date, slug }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.button}>
          <TransparentButton
            text='Читать'
            onClickFunc={() => {
              navigate(`/blog/${slug}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnotherArticleItem;
