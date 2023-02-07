import React from 'react';
import styles from './SliderNextArrow.module.scss';
import { ReactComponent as Arrow } from '../../../../img/slider_arrow.svg';

function SliderNextArrow(props) {
  const { className, style, onClick } = props;
  return <Arrow className={styles.arrow} onClick={onClick} />;
}
export default SliderNextArrow;
