import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackButton.module.scss';

function BackButton({ text, link }) {
  return (
    <Link to={link} className={styles.link}>
      {text}
    </Link>
  );
}

export default BackButton;
