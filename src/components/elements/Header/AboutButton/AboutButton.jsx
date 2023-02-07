import React from 'react';
import styles from './AboutButton.module.scss';
import { ReactComponent as UserImage } from '../../../../img/user.svg';
import { Link } from 'react-router-dom';
const AboutButton = () => {
  return (
    <Link to='/about' className={styles.button}>
      <div className={styles.img}>
        <UserImage />
      </div>
      <div className={styles.text}>О нас</div>
    </Link>
  );
};

export default AboutButton;
