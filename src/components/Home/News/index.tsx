import React, { FC } from 'react';
import Title from '../Title';
import BigNewsCard from '../../Card/News/BigNewsCard';
import LittleNewsCard from '../../Card/News/LittleNewsCard';
import More from '../More';

import firstNews from '../../../assets/img/home/news/news-1.png';
import secondNews from '../../../assets/img/home/news/news-2.png';

import style from './news.module.scss';

const News: FC = () => {
  return (
    <section className={style.news} id={'news'}>
      <div className={style.offset}>
        <div className={style.container}>
          <Title title="Новости" />
          <div className={style.cards}>
            <BigNewsCard
              image={firstNews}
              title={'Новость новость новость новость новость новость новость'}
              descr={
                'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экспериментов, поражающих по своей...'
              }
              data={'06.08.2022'}
            />
            <LittleNewsCard
              image={secondNews}
              title={'Новость новость новость новость новость новость'}
              descr={
                'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экспериментов...'
              }
              data={'06.08.2022'}
            />
            <LittleNewsCard
              image={secondNews}
              title={'Новость новость новость новость новость новость'}
              descr={
                'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экспериментов...'
              }
              data={'06.08.2022'}
            />
          </div>
          <More link={'/'} title={'Все новости'} />
        </div>
      </div>
    </section>
  );
};

export default News;
