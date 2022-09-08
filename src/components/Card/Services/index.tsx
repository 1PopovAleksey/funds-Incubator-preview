import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './services.module.scss';

type PropTypes = {
  image: string;
  title: string;
  descr: string;
  price: string;
};

const ServicesCard: FC<PropTypes> = ({ image, title, descr, price }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={image} />
      </div>
      <div className={style.main}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.descr}>{descr}</p>
        <Link className={style.more} to={'/'}>
          Подробнее...
        </Link>
        <span className={style.price}>{price}</span>
      </div>
    </div>
  );
};

export default ServicesCard;
