import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={style.hero} id={'hero'}>
      <div className={style.offset}>
        <div className={style.container}>
          <div className={style.content}>
            <h1 className={style.title}>Инкубатор Фондов</h1>
            <p className={style.text}>
              С&nbsp;учётом сложившейся международной обстановки, социально-экономическое развитие
              предоставляет широкие возможности для приоретизации разума над эмоциями.
            </p>
            <p className={style.text}>
              Имеется спорная точка зрения, гласящая примерно следующее: представители современных
              социальных резервов являются только методом политического участия и&nbsp;указаны как
              претенденты на&nbsp;роль ключевых факторов.
            </p>
            <Link className={style.link} to={'/'}>
              Выбрать услугу
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
