import React from 'react';
import useWindowSize from '../../../../functions/useWindowSize';
import CustomSlider from '../../../elements/CustomSlider/CustomSlider';
import PostCard from '../../BlogPage/PostCard/PostCard';
import AnotherArticleItem from './AnotherArticleItem/AnotherArticleItem';
import styles from './AnotherArticles.module.scss';

const AnotherArticles = ({ articles }) => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 1200;
  if (isMobile) {
    return (
      <div className={styles.anotherArticles}>
        <CustomSlider title='Другие статьи' data={articles} SlideElement={AnotherArticleItem} />
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.title}>Другие статьи</div>

        <div className={styles.anotherArticles}>
          {articles.slice(0, 3).map((ar) => (
            <div className={styles.anotherArticle} key={ar.id}>
              <PostCard post={ar} />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default AnotherArticles;
