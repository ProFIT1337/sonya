import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DesktopCatalogMenu.module.scss';

const DesktopCatalogMenu = ({ data, activePlace, setActivePlace }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setActivePlace(data[0]);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.places}>
        {data.map((place) => (
          <div
            className={`${styles.place} ${activePlace?.id === place.id ? styles.active : null}`}
            key={place.id}
            onPointerEnter={() => setActivePlace(place)}>
            {place.title}
          </div>
        ))}
      </div>
      <div className={styles.categories}>
        {activePlace &&
          activePlace.categories.map((category) => (
            <div
              className={styles.category}
              onClick={() => {
                navigate('/categories/' + category.slug);
              }}
              key={category.id}>
              <div className={styles.category__title}> {category.title}</div>
              <div className={styles.subcategories}>
                {category.subcategories.map((subcategory) => (
                  <div
                    className={styles.subcategory}
                    onClick={(evt) => {
                      evt.stopPropagation();
                      navigate('/categories/' + subcategory.slug);
                    }}
                    key={subcategory.id}>
                    {subcategory.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DesktopCatalogMenu;
