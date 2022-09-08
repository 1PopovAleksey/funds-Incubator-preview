import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './more.module.scss';

type PropTypes = {
  link: string;
  title: string;
};

const More: FC<PropTypes> = ({ link, title }) => {
  return (
    <>
      <Link className={style.more} to={link}>
        {title}
      </Link>
    </>
  );
};

export default More;
