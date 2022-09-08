import { FC } from 'react';
import style from './FilterBtn.module.scss';

type Props = {
  activatingFilter: { value: boolean; call: (value: boolean) => void };
};

const FilterBtn: FC<Props> = ({ activatingFilter }) => {
  const changeFilterActivationStatus = () => {
    activatingFilter.call(activatingFilter.value ? false : true);
  };

  return (
    <button
      className={`${style.filter__btn} ${activatingFilter.value && style.filter__btn_active}`}
      onClick={changeFilterActivationStatus}
    >
      Фильтр
    </button>
  );
};

export default FilterBtn;
