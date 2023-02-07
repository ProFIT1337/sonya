import React from 'react';
import styles from './ContactsButton.module.scss';
import { ReactComponent as ContactImage } from '../../../../img/phone.svg';
import { Link } from 'react-router-dom';
const ContactsButton = () => {
  return (
    <Link to='/contacts' className={styles.button}>
      <div className={styles.img}>
        <ContactImage />
      </div>
      <div className={styles.text}>Контакты</div>
    </Link>
  );
};

export default ContactsButton;
