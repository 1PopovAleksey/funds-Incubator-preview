import { FC, useState } from 'react';
import FilterBtn from '../../Filter/FilterBtn/FilterBtn';
import FilterPopup from '../../Filter/FilterPopup/FilterPopup';
import PginatedQuanyity from '../../Paginated/PginatedBadge/PaginatedBadge';
import style from './Header.module.scss';

const Header: FC = () => {
  const [activatingFilter, setActivatingFilter] = useState<boolean>(false);
  const [valueActivatedBadge, setValueActivatedBadge] = useState<number>(10);

  return (
    <section className={style.fund}>
      <div className={style.fund__header}>
        <PginatedQuanyity
          props={{
            valueActivatedBadge: valueActivatedBadge,
            call: (value: number) => setValueActivatedBadge(value)
          }}
        />
        <h2 className={style.fund__title}>Фонды</h2>
        <div className={style.fund__searchFilter}>
          <form className={style.fund__searchFilter_box}>
            <input
              className={style.fund__searchFilter__input}
              type="text"
              placeholder="Найдите фонд..."
            />
            <button className={style.fund__searchFilter_box_btn}></button>
          </form>
          <FilterBtn
            activatingFilter={{
              value: activatingFilter,
              call: (value: boolean) => setActivatingFilter(value)
            }}
          />
        </div>
        {activatingFilter && <FilterPopup />}
      </div>
    </section>
  );
};

export default Header;
