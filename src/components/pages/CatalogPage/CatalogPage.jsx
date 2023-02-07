import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCatalog } from '../../../functions/getCatalog';
import BreadCrumbs from '../../elements/BreadCrumbs/BreadCrumbs';
import styles from './CatalogPage.module.scss';
import CategoryCard from './CategoryCard/CategoryCard';

const BREADCRUMBSDATA = [{ link: '/catalog', text: 'Каталог' }];

const CatalogPage = () => {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getCatalog().then((res) => setCatalog(res));
  });
  return (
    <div className={styles.container}>
      <BreadCrumbs items={BREADCRUMBSDATA} />
      <h1 className={styles.title}>Каталог</h1>
      <div className={styles.content}>
        <div className={styles.places}>
          {catalog &&
            catalog.map((place) => (
              <div className={styles.place} key={place.id}>
                <div className={styles.place__title}>{place.title}</div>
                <div className={styles.categories}>
                  {place.categories &&
                    place.categories.map((category) => (
                      <Link to={'/categories/' + category.slug} className={styles.category} key={category.id}>
                        <CategoryCard category={category} />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.text__title}>Товары IKEA в Красноярске</div>
        <div className={styles.text__text}>
          IKEA приостановила свою работу на территории Росиийской федерации, но даже сейчас в наличи у нас есть многие
          товары из каталога. Также мы настроили партнерсво между поставщиками мебели IKEA в России, поэтому привычная
          мебель осталась без поддержки бренда, но хуже не стала. Мы рады помочь сделать вашу квартиру красивее и
          уютнее!
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
