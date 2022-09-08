import React, { FC, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import Submenu from '../../components/Submenu';

import style from './header.module.scss';

const Header: FC = () => {
  const [showSubmenu, setShowSubmenu] = useState('');
  const [itemSelector, setSelector] = useState('');

  const toggleSubmenu = (title: string, selector: string) => {
    if (title === '') {
      setShowSubmenu('');
      setSelector('');
    } else if (showSubmenu !== title) {
      setShowSubmenu(title);
      setSelector(selector);
    } else {
      setShowSubmenu('');
      setSelector('');
    }
  };

  if (itemSelector !== '') {
    document.addEventListener('click', (e) => {
      const element = document.querySelector(`.${itemSelector}`);
      if (element !== null) {
        const withinBoundaries = e.composedPath().includes(element);
        if (!withinBoundaries) {
          setShowSubmenu('');
          setSelector('');
        } else return;
      } else return;
    });
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to={'/'} className={style.logo}>
          <img src={logo} alt="Логотоп" aria-label="Логотип" />
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to={'/'}>Главная</Link>
            </li>
            <li className={showSubmenu === 'О нас' ? style.menu__item_activ : ''}>
              <Link to={'/'} onClick={() => toggleSubmenu('О нас', style.menu__item_activ)}>
                О нас
              </Link>
              <Submenu
                list={[
                  { title: 'Общая информация', link: '/', id: useId() },
                  { title: 'Наша команда', link: '/', id: useId() },
                  { title: 'Добровольцы', link: '/', id: useId() }
                ]}
                show={showSubmenu === 'О нас' ? true : false}
                toggleSubmenu={toggleSubmenu}
              />
            </li>
            <li>
              <Link to={'/'}>Услуги</Link>
            </li>
            <li className={showSubmenu === 'Материалы' ? style.menu__item_activ : ''}>
              <Link to={'/'} onClick={() => toggleSubmenu('Материалы', style.menu__item_activ)}>
                Материалы
              </Link>
              <Submenu
                list={[
                  { title: 'Все материалы', link: '/', id: useId() },
                  { title: 'Материалы для фондов', link: '/', id: useId() },
                  { title: 'Материалы для родителей', link: '/', id: useId() },
                  { title: 'Новости', link: '/', id: useId() }
                ]}
                show={showSubmenu === 'Материалы' ? true : false}
                toggleSubmenu={toggleSubmenu}
              />
            </li>
            <li className={showSubmenu === 'Фонды' ? style.menu__item_activ : ''}>
              <Link to={'/'} onClick={() => toggleSubmenu('Фонды', style.menu__item_activ)}>
                Фонды
              </Link>
              <Submenu
                list={[
                  { title: 'Все фонды', link: '/funds', id: useId() },
                  { title: 'Документы', link: '/', id: useId() }
                ]}
                show={showSubmenu === 'Фонды' ? true : false}
                toggleSubmenu={toggleSubmenu}
              />
            </li>
            <li>
              <Link to={'/'}>Форум</Link>
            </li>
            <li>
              <Link to={'/'}>Контакты</Link>
            </li>
          </ul>
        </nav>
        <Link to={'/'} className={style.personal}>
          Личный кабинет
        </Link>
      </div>
    </header>
  );
};

export default Header;
