import React, { FC } from 'react';
import Title from '../Title';
import sber from '../../../assets/img/home/partners/sber.svg';
import cognizant from '../../../assets/img/home/partners/cognizant.svg';
import easycare from '../../../assets/img/home/partners/easycare.svg';
import solupro from '../../../assets/img/home/partners/solupro.svg';
import lenovo from '../../../assets/img/home/partners/lenovo.svg';
import casio from '../../../assets/img/home/partners/casio.svg';

import style from './partners.module.scss';

const Partners: FC = () => {
  return (
    <section className={style.partners} id={'partners'}>
      <div className={style.offset}>
        <div className={style.container}>
          <Title title="Партнёры" />
          <div className={style.cards}>
            <img src={sber} alt="Логотип" />
            <img src={cognizant} alt="Логотип" />
            <img src={easycare} alt="Логотип" />
            <img src={solupro} alt="Логотип" />
            <img src={lenovo} alt="Логотип" />
            <img src={solupro} alt="Логотип" />
            <img src={casio} alt="Логотип" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
