import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './reviews.module.scss';

type PropTypes = {
  name: string;
  image: string;
  title: string;
  descr: string;
  data: string;
};

const ReviewsCard: FC<PropTypes> = ({ image, name, title, descr, data }) => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <img className={style.image} src={image} alt="" />
        <span className={style.name}>{name}</span>
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

export default ReviewsCard;
