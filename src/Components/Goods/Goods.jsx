import { useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import Product from '../Product/Product';
import style from './Goods.module.scss';
import Pagination from '../Pagination/Pagination';

const Goods = ({ title }) => {
  const { goodsList, totalCount } = useSelector((state) => state.goods);

  const supData = (totalCount === 0) ? null : totalCount; //тк был баг, если 0 - выводил

  return (
    <section>
      <Container>
        <h2 className={style.title}>
          {title ?? 'Новинки'}
          {supData && <sup>&nbsp;({supData})</sup>}
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
