import React from 'react';
import styles from './SliderPrevArrow.module.scss';
import { ReactComponent as Arrow } from '../../../../img/slider_arrow.svg';

function SliderPrevArrow(props) {
  const { className, style, onClick, small } = props;
  return <Arrow className={styles.arrow + ' ' + (small ? styles.small : '')} onClick={onClick} />;
}
export default SliderPrevArrow;
