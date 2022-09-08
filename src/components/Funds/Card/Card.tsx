import { FC } from 'react';
import style from './Card.module.scss';
import { Link } from 'react-router-dom';
import { IFundsCurrentItems } from '../../../models';

interface IProps {
  currentItems: IFundsCurrentItems[] | null;
}

const Card: FC<IProps> = ({ currentItems }) => {
  return (
    <div className={style.wrap}>
      {currentItems &&
        currentItems.map((value) => {
          return (
            <div className={style.card} key={value.id}>
              <div className={style.inner__text}>
                <h4 className={style.title}>
                  &#171;{value.title} {value.id}&#187;
                </h4>
                <p className={style.text}>{value.text}</p>
                <div className={style.footer}>
                  <div>
                    <div>
                      <span>Город:</span>
                      <span>{value.city}</span>
                    </div>
                    <div>
                      <span>Район:</span>
                      <span>{value.district}</span>
                    </div>
                  </div>
                  <Link to={`/funds/${1}`} className={style.link}>
                    Перейти
                  </Link>
                </div>
              </div>
              <img className={style.img} src={value.img} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default Card;
