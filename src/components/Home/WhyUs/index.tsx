import React, { FC } from 'react';
import WhyUsCard from '../../Card/WhyUs';
import Title from '../Title';
import briefcase from '../../../assets/img/home/whyus/briefcase.svg';
import document from '../../../assets/img/home/whyus/document.svg';
import calendar from '../../../assets/img/home/whyus/calendar.svg';
import star from '../../../assets/img/home/whyus/star.svg';

import style from './whyus.module.scss';

const WhyUs: FC = () => {
  return (
    <section className={style.whyus} id={'whyus'}>
      <div className={style.offset}>
        <div className={style.container}>
          <Title title="Почему мы?" />
          <div className={style.cards}>
            <WhyUsCard
              svg={briefcase}
              title={'Доверие'}
              descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum'}
            />
            <WhyUsCard
              svg={document}
              title={'Аккуратность'}
              descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum'}
            />
            <WhyUsCard
              svg={calendar}
              title={'Скорость'}
              descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum'}
            />
            <WhyUsCard
              svg={star}
              title={'Качество'}
              descr={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
