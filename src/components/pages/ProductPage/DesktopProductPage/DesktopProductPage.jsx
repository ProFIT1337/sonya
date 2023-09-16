import React from 'react';
import BreadCrumbs from '../../../elements/BreadCrumbs/BreadCrumbs';
import CustomSlider from '../../../elements/CustomSlider/CustomSlider';
import InStockItem from '../../../elements/InStock/InStockItem/InStockItem';
import AboutBlock from '../AboutBlock/AboutBlock';
import ProductGroup from '../ProductGroup/ProductGroup';
import styles from './DesktopProductPage.module.scss';
import { ReactComponent as Cross } from '../../../../img/modal_cross.svg';
import { ReactComponent as Arrow } from '../../../../img/modal_arrow.svg';
import AddToOrderButton from '../AddToOrderButton/AddToOrderButton';

const DesktopProductPage = ({ product, products, setActivePhoto, activePhoto, nextPhoto, prevPhoto }) => {
  const BREADCRUMBSDATA = [
    { link: '/catalog', text: 'Каталог' },
    { link: '/categories/' + product?.categories[0].slug, text: product?.categories[0].title },
    { link: '/products/' + product?.slug, text: product?.title },
  ];

  return (
    <div>
      <BreadCrumbs items={BREADCRUMBSDATA} />
      <div className={styles.wrapper}>
        <div className={styles.upperWrapper}>
          <div className={styles.photos}>
            {product.photos.map((photo) => (
              <div className={styles.photo} key={photo.id} onClick={() => setActivePhoto(photo.id)}>
                <img src={photo.photo} alt={product.title} />
              </div>
            ))}
          </div>

          <div className={styles.info}>
            <div className={styles.info_header}>
              <h2 className={styles.title}>{product.title}</h2>
              {product.in_stock && <div className={styles.inStock}>В наличии</div>}
            </div>
            <div className={styles.shortDescription}>{product.short_description}</div>
            <div className={styles.vendorCode}>Артикул: {product.vendor_code}</div>
            <div className={styles.groups}>
              {product.groups.map((group) => (
                <div className={styles.group} key={group.id}>
                  <ProductGroup group={group} productId={product.id} />
                </div>
              ))}
            </div>
            <div className={styles.prices}>
              {product.old_price && (
                <div className={styles.oldPrice}>
                  {product.old_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
                </div>
              )}
              <div className={styles.newPrice}>
                {product.new_price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
              </div>
              <div className={styles.addOrder}>
                <AddToOrderButton product={product} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionTitle}>Описание</div>
          <div className={styles.descriptionText}>{product.description}</div>
        </div>
        <div className={styles.about}>
          <AboutBlock product={product} />
        </div>
        <div className={styles.recommended}>
          <CustomSlider
            title='С этим товаром покупают'
            data={products.filter((pr) => pr.id !== product.id)}
            SlideElement={InStockItem}
          />
        </div>
        <div className={styles.inStockSlider}>
          <CustomSlider
            title='Похожие товары в наличии'
            data={products.filter((pr) => pr.id !== product.id)}
            SlideElement={InStockItem}
          />
        </div>

        {activePhoto > 0 && (
          <div className={styles.modal} onClick={() => setActivePhoto(-1)}>
            <div className={styles.modal__image}>
              <div className={styles.modal__cross}>
                <Cross />
              </div>
              <div
                className={styles.modal__arrow + ' ' + styles.modal__prevArrow}
                onClick={(evt) => {
                  evt.stopPropagation();
                  prevPhoto();
                }}>
                <Arrow />
              </div>
              <div
                className={styles.modal__arrow + ' ' + styles.modal__nextArrow}
                onClick={(evt) => {
                  evt.stopPropagation();
                  nextPhoto();
                }}>
                <Arrow />
              </div>
              <img src={product.photos.find((ph) => ph.id === activePhoto)?.photo} alt={product.title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopProductPage;
