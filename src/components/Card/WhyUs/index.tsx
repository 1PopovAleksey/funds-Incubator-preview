import React, { FC } from 'react';

import style from './whyus.module.scss';

type PropTypes = {
  title: string;
  descr: string;
  svg: string;
};

const ServicesCard: FC<PropTypes> = ({ title, descr, svg }) => {
  return (
    <div className={style.card}>
      <img src={svg} alt="" />
      <h3 className={style.title}>{title}</h3>
      <p className={style.descr}>{descr}</p>
    </div>
  );
};

export default ServicesCard;
