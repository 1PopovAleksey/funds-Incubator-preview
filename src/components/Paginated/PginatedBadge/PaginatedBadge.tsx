import { FC } from 'react';
import style from './PaginatedBadge.module.scss';
import { useDispatch } from 'react-redux';
import { badgeSwitching } from '../../../reducer/PaginatedBadgeSlice';

const items = [10, 20, 50, 100];

type Props = {
  props: { valueActivatedBadge: number; call: (value: number) => void };
};

const PaginatedBadge: FC<Props> = ({ props }) => {
  const dispatch = useDispatch();
  const { valueActivatedBadge, call } = props;
  const changingNumberCards = (event: React.MouseEvent<HTMLLIElement>) => {
    const valueBadge = Number(event.currentTarget.innerHTML);

    call(valueBadge);
    dispatch(badgeSwitching(valueBadge));
  };

  return (
    <div className={style.badge}>
      <span className={style.badge__title}>Показано</span>
      <ul className={style.badge__list}>
        {items.map((value) => {
          return (
            <li
              className={`${style.badge__item} ${
                valueActivatedBadge === value && style.badge__item_active
              }`}
              onClick={changingNumberCards}
              key={value}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginatedBadge;
