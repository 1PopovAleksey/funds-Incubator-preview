import React, { FC, useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Title from '../Title';
import More from '../More';
import ReviewsCard from '../../Card/Reviews';
import people from '../../../assets/img/home/people.png';

import 'swiper/css/bundle';
import style from './reviews.module.scss';

const cards = [
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  },
  {
    image: people,
    name: 'Шарпов Алексей Игоревич',
    title: 'Невероятно быстро',
    descr:
      'Заказал фонд по обычному тарифу и получил готовую работу уже через две недели. Всё понравилось, команда знает своё дело! Также...',
    data: '06.08.2022'
  }
];

const Reviews: FC = () => {
  const id = useId;

  return (
    <section className={style.reviews} id={'reviews'}>
      <div className={style.offset}>
        <div className={style.container}>
          <Title title="Отзывы" />
          <Swiper
            slidesPerView={3}
            spaceBetween={26}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            keyboard={{
              enabled: true
            }}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={style.mySwiper}
          >
            {cards.map((card, index) => (
              <SwiperSlide className={style.swiperSlide}>
                <ReviewsCard
                  key={`${id}-${index}`}
                  image={card.image}
                  name={card.name}
                  title={card.title}
                  descr={card.descr}
                  data={card.data}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <More link={'/'} title={'Все отзывы'} />
      </div>
    </section>
  );
};

export default Reviews;
