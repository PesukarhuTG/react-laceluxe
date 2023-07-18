import { useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import Product from '../Product/Product';
import style from './Goods.module.scss';
import Pagination from '../Pagination/Pagination';
import Preloader from '../Preloader/Preloader';

const Goods = ({ title }) => {
  const { goodsList, totalCount, status } = useSelector((state) => state.goods);

  return (
    <section>
      <Container>
        <h2 className={style.title}>
          {title ?? 'Новинки'}
          {totalCount ? <sup>&nbsp;({totalCount})</sup> : ''}
        </h2>
        {status === 'loading' ? (
          <Preloader />
        ) : (
          <>
            <ul className={style.list}>
              {goodsList.map((item) => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>
            <Pagination />
          </>
        )}
      </Container>
    </section>
  );
};

export default Goods;
