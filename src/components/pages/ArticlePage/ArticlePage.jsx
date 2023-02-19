import React, { useState } from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import useWindowSize from '../../../functions/useWindowSize';
import BackButton from '../../elements/BackButton/BackButton';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import InStock from '../../elements/InStock/InStock';
import AnotherArticles from './AnotherArticles/AnotherArticles';
import styles from './ArticlePage.module.scss';
import NotFound from '../NotFound/NotFound';

const ArticlePage = () => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 1200;
  const posts = useSelector((state) => state.blog.posts);
  let params = useParams();
  const article = posts.find((post) => post.slug === params.slug);
  let BREADCRUMBSDATA = [
    { link: '/blog', text: 'Блог' },
    { link: '', text: article?.title },
  ];
  if (article) {
    return (
      article && (
        <div className={styles.container}>
          {isMobile ? <BackButton text='Блог' link='/blog' /> : <BreadCrumbs items={BREADCRUMBSDATA} />}
          <h1 className={styles.title}>{article.title}</h1>
          {isMobile ? (
            <div className={styles.content}>{parse(article.full_text_mobile)}</div>
          ) : (
            <div className={styles.content}>{parse(article.full_text)}</div>
          )}
          <div className={styles.another}>
            <InStock title='Похожие товары' />
          </div>

          <AnotherArticles articles={posts.filter((ar) => ar.id !== article.id)} />
        </div>
      )
    );
  } else {
    return <NotFound />;
  }
};

export default ArticlePage;
