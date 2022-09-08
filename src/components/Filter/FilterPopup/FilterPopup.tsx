import { FC } from 'react';
import style from './FilterPopup.module.scss';

const FilterPopup: FC = () => {
  return (
    <div className={style.filter}>
      <div className={style.btn__box}>
        <button className={`${style.btn__criterion} ${style.btn__criterion_active}`}>Город</button>
        <button className={style.btn__criterion}>Район</button>
        <button className={style.btn__criterion}>Школа</button>
        <button className={style.btn__criterion}>Детский сад</button>
      </div>
      <span className={style.name__selected__filter}>Города:</span>
      <ul className={style.list}>
        <li className={style.item}>
          <span className={style.value}>Абакан</span>
          <span className={style.badge}>4</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Санкт-Петербург</span>
          <span className={style.badge}>101</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Абакан</span>
          <span className={style.badge}>4</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Санкт-Петербург</span>
          <span className={style.badge}>101</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Абакан</span>
          <span className={style.badge}>4</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Санкт-Петербург</span>
          <span className={style.badge}>101</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Абакан</span>
          <span className={style.badge}>4</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Абакан</span>
          <span className={style.badge}>4</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Санкт-Петербург</span>
          <span className={style.badge}>101</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Абакан</span>
          <span className={style.badge}>4</span>
        </li>
        <li className={style.item}>
          <span className={style.value}>Санкт-Петербург</span>
          <span className={style.badge}>101</span>
        </li>
      </ul>
    </div>
  );
};

export default FilterPopup;
