import { FC } from 'react';
import style from './Cards.module.scss';
import PaginatedItems from '../../Paginated/PaginatedItems/PaginatedItems';
import img from '../../../assets/img/funds/cards/card-test.jpg';
import Card from '../Card/Card';
import { IFundsCurrentItems } from '../../../models';
import { useAppSelector } from '../../../services/hooks';

//тестовые данные
let idItems = 0;
const items = [
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  },
  {
    title: 'Я за жизнь',
    text: 'Наш фонд функционирует уже более 10-ти лет, мы помогли десяткам тысяч детей. С помощью Инкубатора Фондов мы смогли начать нашу деятельность.',
    city: 'Москва',
    district: 'Останкинский',
    img: img,
    id: `${++idItems}`
  }
];

const Cards: FC = () => {
  const itemsPerPage: number = useAppSelector((state) => state.paginatedBadge.value);

  return (
    <section className={style.box}>
      <div className={style.inner}>
        <PaginatedItems itemsPerPage={itemsPerPage} items={items}>
          {(value: IFundsCurrentItems[] | null) => <Card currentItems={value} />}
        </PaginatedItems>
      </div>
    </section>
  );
};

export default Cards;
