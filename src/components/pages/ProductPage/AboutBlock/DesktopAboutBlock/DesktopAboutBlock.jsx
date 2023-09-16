import React from 'react';
import styles from './DesktopAboutBlock.module.scss';

const DesktopAboutBlock = ({ MODULES, activeModule, setActiveModule, specificationsCategories }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.title}>О товаре</div>
        <div className={styles.nav}>
          <div className={styles.nav__items}>
            {MODULES.map((module) => (
              <div
                className={styles.nav__item + ' ' + (activeModule[0] === module[0] ? styles.active : '')}
                key={module[0]}
                onClick={() => setActiveModule(module)}>
                {module[1]}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          {
            specificationsCategories
              .filter((category) => category.specification_type === activeModule[2])
              .map((cat) => (
                <div className={styles.category} key={cat.id}>
                  <div className={styles.category__title}>{cat.title}</div>
                  <div className={styles.category__specs}>
                    {cat?.specs.map((spec) => (
                      <div className={styles.specification} key={spec.id}>
                        {spec.photo ? (
                          <div className={styles.spec__photo}>
                            <img src={spec.photo} alt='' />
                          </div>
                        ) : (
                          <>
                            {spec.title && <div className={styles.spec__title}>{spec.title}</div>}
                            <div className={styles.spec__value}>{spec.value}</div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            // .
          }
        </div>
      </div>
    </div>
  );
};

export default DesktopAboutBlock;
