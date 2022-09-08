import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from '../../layout/Header/header.module.scss';

type PropTypes = {
  list: { title: string; link: string; id: string }[];
  show: boolean;
  toggleSubmenu: (title: string, selector: string) => void;
};

const Submenu: FC<PropTypes> = ({ list, show, toggleSubmenu }) => {
  return (
    <ul className={show ? style.submenu_show : style.submenu}>
      {list.map((i) => (
        <li key={i.id}>
          <Link to={i.link} onClick={() => toggleSubmenu('', '')}>
            {i.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
