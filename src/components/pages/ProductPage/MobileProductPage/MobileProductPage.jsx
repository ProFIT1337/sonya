import React from 'react';
import BackButton from '../../../elements/BackButton/BackButton';
import CustomSlider from '../../../elements/CustomSlider/CustomSlider';
import InStockItem from '../../../elements/InStock/InStockItem/InStockItem';
import AboutBlock from '../AboutBlock/AboutBlock';
import ProductGroup from '../ProductGroup/ProductGroup';
import styles from './MobileProductPage.module.scss';
import { ReactComponent as Cross } from '../../../../img/modal_cross.svg';
import { ReactComponent as Arrow } from '../../../../img/modal_arrow.svg';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useState } from 'react';
import AddToOrderButton from '../AddToOrderButton/AddToOrderButton';

const MobileProductPage = ({ product, products, setActivePhoto, activePhoto, nextPhoto, prevPhoto }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slider = useRef();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex + 1);
    },
  };
  return (
    <div>
      <BackButton text='Каталог' link='/catalog' />
      <div className={styles.wrapper}>
        <div className={styles.info_header}>
          <h2 className={styles.title}>{product.title}</h2>
          {product.in_stock && <div className={styles.inStock}>В наличии</div>}
        </div>
        <div className={styles.shortDescription}>{product.short_description}</div>
        <div className={styles.vendorCode}>Артикул: {product.vendor_code}</div>
        <div className={styles.photos}>
          <Slider {...settings} ref={slider}>
            {product.photos.map((photo) => (
              <div className={styles.photo} key={photo.id} onClick={() => setActivePhoto(photo.id)}>
                <img src={photo.photo} alt={product.title} />
              </div>
            ))}
          </Slider>
          <div className={styles.photos__counter}>
            {currentSlide}/{product.photos.length}
          </div>
        </div>
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

export default MobileProductPage;
