import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './littlenewscard.module.scss';

type PropTypes = {
  image: string;
  title: string;
  descr: string;
  data: string;
};

const LittleNewsCard: FC<PropTypes> = ({ image, title, descr, data }) => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <img className={style.image} src={image} alt="" />
      </div>
      <div className={style.main}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.descr}>{descr}</p>
        <Link className={style.more} to={'/'}>
          Подробнее...
        </Link>
        <span className={style.data}>{data}</span>
      </div>
    </div>
  );
};

export default LittleNewsCard;
