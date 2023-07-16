import { useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import Product from '../Product/Product';
import style from './Goods.module.scss';
import Pagination from '../Pagination/Pagination';

const Goods = ({ title = 'Новинки' }) => {
  const { goodsList, totalCount } = useSelector((state) => state.goods);

  return (
    <section>
      <Container>
        <h2 className={style.title}>
          {title}
          <sup>&nbsp;({totalCount})</sup>
        </h2>
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        <Pagination />
      </Container>
    </section>
  );
};

export default Goods;
