import React, { FC, useId } from 'react';
import ServicesCard from '../../Card/Services';
import More from '../More';
import Title from '../Title';

import services_1 from '../../../assets/img/home/services/services-1.png';
import services_2 from '../../../assets/img/home/services/services-2.png';
import services_3 from '../../../assets/img/home/services/services-3.png';
import services_4 from '../../../assets/img/home/services/services-4.png';

import style from './services.module.scss';

const cards = [
  {
    image: services_1,
    title: 'Регистрация фонда',
    descr: 'Регистрируем фонд в едином реестре, помогаем с...',
    price: '50 000 ₽'
  },
  {
    image: services_2,
    title: 'Обслуживание фонда',
    descr: 'Возьмём на себя все обязанности по ведению...',
    price: '75 000 ₽'
  },
  {
    image: services_3,
    title: 'Открытие фонда',
    descr: 'Создание фонда с нуля. Мы предлагаем Вам нашу...',
    price: '80 000 ₽'
  },
  {
    image: services_4,
    title: 'Всё в одном',
    descr: 'Регистрируем фонд, проводим полное открытие и берём...',
    price: '250 000 ₽'
  }
];

const Services: FC = () => {
  const id = useId;

  return (
    <section className={style.services} id={'services'}>
      <div className={style.offset}>
        <div className={style.container}>
          <Title title="Услуги" />
          <div className={style.cards}>
            {cards.map((card, index) => (
              <ServicesCard
                key={`${id}-${index}`}
                image={card.image}
                title={card.title}
                descr={card.descr}
                price={card.price}
              />
            ))}
          </div>
          <More link={'/'} title={'Все услуги'} />
        </div>
      </div>
    </section>
  );
};

export default Services;
