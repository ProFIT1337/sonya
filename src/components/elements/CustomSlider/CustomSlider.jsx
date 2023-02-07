import React from 'react';
import Slider from 'react-slick';
import SliderNextArrow from '../SliderArrows/SliderNextArrow/SliderNextArrow';
import SliderPrevArrow from '../SliderArrows/SliderPrevArrow/SliderPrevArrow';
import styles from './CustomSlider.module.scss';

function CustomSlider({ title, data, SlideElement }) {
  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    infinite: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <Slider {...settings}>
        {data &&
          data.map((item) => (
            <div className={styles.card} key={item.id}>
              <SlideElement {...item} />
            </div>
          ))}
      </Slider>
    </div>
  );
}
export default CustomSlider;
