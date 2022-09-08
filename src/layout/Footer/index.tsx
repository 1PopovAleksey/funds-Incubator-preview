import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-footer.png';
import { Telegram, Vk } from './Icon';

import style from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={style.offset}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.flex}>
            <div className={style.info}>
              <Link to={'/'} className={style.logo}>
                <img src={logo} alt="Логотоп" aria-label="Логотип" />
              </Link>
              <ul className={style.social}>
                <li>
                  <a href="#" target="_blank">
                    <Telegram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Vk />
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.links}>
              <a href="mailto:in-fund@mail.ru" target={'_blank'}>
                in-fund@mail.ru
              </a>
              <a href="tel:+79999999999" target={'_blank'}>
                +7 (999) 999-99-99
              </a>
            </div>
          </div>
          <div>
            <nav className={style.nav}>
              <ul>
                <li>
                  <Link to={'/'}>Главная</Link>
                </li>
                <li>
                  <Link to={'/'}>Услуги</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={'/'}>Фонды</Link>
                </li>
                <li>
                  <Link to={'/'}>Контакты</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={'/'}>О&nbsp;нас</Link>
                </li>
                <li>
                  <Link to={'/'}>Материалы</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={'/'}>Форум</Link>
                </li>
                <li>
                  <Link to={'/'}>Разработчики</Link>
                </li>
              </ul>
            </nav>
            <div className={style.bottom}>
              <span>&copy;2022, Инкубатор Фондов, все права защищены</span>
              <a className={style.politics} href="#" target="_blank">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
