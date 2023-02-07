import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransparentButton from '../../../elements/TransparentButton/TransparentButton';
import styles from './MainPost.module.scss';

const MainPost = ({ post }) => {
  let navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={post.photo} alt={post.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.date}>{post.date}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.button}>
          <TransparentButton
            text='Читать'
            onClickFunc={() => {
              navigate(`/blog/${post.slug}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPost;
