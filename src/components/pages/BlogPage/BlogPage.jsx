import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import styles from './BlogPage.module.scss';
import { getBlogPosts } from '../../../functions/getBlogPosts';
import MainPost from './MainPost/MainPost';
import PostCard from './PostCard/PostCard';

const BREADCRUMBSDATA = [{ link: '/blog', text: 'Блог' }];

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getBlogPosts().then((res) => setPosts(res));
  });
  return (
    <div className={styles.container}>
      <BreadCrumbs items={BREADCRUMBSDATA} />
      <h1 className={styles.title}>Блог</h1>
      <div className={styles.mainPost}>{posts[0] && <MainPost post={posts[0]} />}</div>
      <div className={styles.posts}>
        {posts &&
          posts.slice(1).map((post) => (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogPage;
