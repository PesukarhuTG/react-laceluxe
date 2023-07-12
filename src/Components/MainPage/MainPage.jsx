import { useParams } from 'react-router-dom';
import style from './MainPage.module.scss';
import Container from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../store/goodSlice';
import Product from '../Product/Product';

const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams(); //из path сможем достать категории
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [gender]);

  return (
    <section>
      <Container>
        <h2 className={style.title}>Новинки</h2>
        <ul className={style.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default MainPage;
