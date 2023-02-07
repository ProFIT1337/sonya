import LogoButton from '../Header/LogoButton/LogoButton';
import styles from './Footer.module.scss';

import { ReactComponent as Place } from '../../../img/contacts/place.svg';
import { ReactComponent as Phone } from '../../../img/contacts/phone.svg';
import { ReactComponent as Mail } from '../../../img/contacts/mail.svg';
import { ReactComponent as Vk } from '../../../img/contacts/vk.svg';
import { ReactComponent as Whatsapp } from '../../../img/contacts/watsapp.svg';
import { ReactComponent as Tg } from '../../../img/contacts/tg.svg';
import { ReactComponent as Viber } from '../../../img/contacts/viber.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='wrapper'>
        <div className={styles.container}>
          <div className={styles.logo}>
            <LogoButton />
          </div>
          <div className={styles.links}>
            <div className={styles.catalog}>
              <div className={styles.catalog__title}>Каталог</div>
              <div className={styles.catalog__links}>
                <div className={styles.catalog__link}>Мебель</div>
                <div className={styles.catalog__link}>Текстиль</div>
                <div className={styles.catalog__link}>Посуда</div>
                <div className={styles.catalog__link}>Декор</div>
                <div className={styles.catalog__link}>Столы</div>
                <div className={styles.catalog__link}>Комоды</div>
              </div>
            </div>
            <div className={styles.about}>
              <div className={styles.about__title}>Клиентский сервис</div>
              <div className={styles.about__links}>
                <Link to='/about' className={styles.about__link}>
                  О нас
                </Link>
                <Link to='/about#howMakeOrder' className={styles.about__link}>
                  Как заказать?
                </Link>
                <Link to='/about#delivery' className={styles.about__link}>
                  Доставка и оплата
                </Link>
                <Link to='/confidential' className={styles.about__link}>
                  Политика конфиденциальности
                </Link>
              </div>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contacts__links}>
                <div className={styles.contacts__link}>
                  <div className={styles.contacts__link_img}>
                    <Place />
                  </div>
                  <div className={styles.contacts__link_text}>г. Красноярск, ул. Вавилова, д. 3, стр. 9</div>
                </div>
                <div className={styles.contacts__link}>
                  <div className={styles.contacts__link_img}>
                    <Phone />
                  </div>
                  <div className={styles.contacts__link_text}>
                    +7 (391) 205-10-16 <br /> <span>c 10:00 до 20:00</span>
                  </div>
                </div>
                <div className={styles.contacts__link}>
                  <div className={styles.contacts__link_img}>
                    <Mail />
                  </div>
                  <div className={styles.contacts__link_text}>info@dostavkakrsk.ru</div>
                </div>
              </div>
              <div className={styles.contacts__logos}>
                <div className={styles.contacts__logo}>
                  <Vk />
                </div>
                <div className={styles.contacts__logo}>
                  <Whatsapp />
                </div>
                <div className={styles.contacts__logo}>
                  <Tg />
                </div>
                <div className={styles.contacts__logo}>
                  <Viber />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.defense}>© Все права защищены 2022</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
