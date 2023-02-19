import React from 'react';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import styles from './BlogPage.module.scss';
import MainPost from './MainPost/MainPost';
import PostCard from './PostCard/PostCard';
import useWindowSize from '../../../functions/useWindowSize';
import BackButton from '../../elements/BackButton/BackButton';
import { useSelector } from 'react-redux';

const BREADCRUMBSDATA = [{ link: '/blog', text: 'Блог' }];

const BlogPage = () => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 1200;

  const posts = useSelector((state) => state.blog.posts);

  return (
    <div className={styles.container}>
      {isMobile ? <BackButton text='Назад' link='/' /> : <BreadCrumbs items={BREADCRUMBSDATA} />}
      <h1 className={styles.title}>Блог</h1>
      {!isMobile ? <div className={styles.mainPost}>{posts[0] && <MainPost post={posts[0]} />}</div> : null}
      <div className={styles.posts}>
        {posts &&
          (isMobile ? posts : posts.slice(1)).map((post) => (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogPage;
