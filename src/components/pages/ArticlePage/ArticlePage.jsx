import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../../functions/getArticle';
import { getBlogPosts } from '../../../functions/getBlogPosts';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import InStock from '../../elements/InStock/InStock';
import PostCard from '../BlogPage/PostCard/PostCard';
import styles from './ArticlePage.module.scss';

const ArticlePage = () => {
  let params = useParams();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  useEffect(() => {
    getBlogPosts().then((res) => setArticles(res));
    getArticle(params.id).then((res) => setArticle(res));
  }, [params]);
  let BREADCRUMBSDATA = [
    { link: '/blog', text: 'Блог' },
    { link: '', text: article?.title },
  ];
  return (
    <div className={styles.container}>
      <BreadCrumbs items={BREADCRUMBSDATA} />
      <div className={styles.content}>Hello world</div>
      <div className={styles.another}>
        <InStock title='Похожие товары' />
      </div>
      <div className={styles.anotherArticles}>
        {articles &&
          articles
            .filter((ar) => ar.id !== article.id)
            .slice(0, 3)
            .map((ar) => (
              <div className={styles.anotherArticle} key={ar.id}>
                <PostCard post={ar} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ArticlePage;
