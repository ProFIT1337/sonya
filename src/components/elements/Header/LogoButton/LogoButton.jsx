import React from 'react';
import styles from './LogoButton.module.scss';
import { ReactComponent as Logo } from '../../../../img/logo.svg';
import { Link } from 'react-router-dom';
const LogoButton = () => {
  return (
    <Link to='/' className={styles.link}>
      <Logo className={styles.img} />
    </Link>
  );
};

export default LogoButton;
