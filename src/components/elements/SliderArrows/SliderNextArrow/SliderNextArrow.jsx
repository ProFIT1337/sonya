import React from 'react';
import styles from './SliderNextArrow.module.scss';
import { ReactComponent as Arrow } from '../../../../img/slider_arrow.svg';

function SliderNextArrow(props) {
  const { className, style, onClick, small } = props;
  return <Arrow className={styles.arrow + ' ' + (small ? styles.small : '')} onClick={onClick} />;
}
export default SliderNextArrow;
