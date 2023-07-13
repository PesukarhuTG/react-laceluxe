import { useParams } from 'react-router-dom';
import style from './MainPage.module.scss';
import Container from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../store/goodSlice';
import Product from '../Product/Product';
import { setActiveGender } from '../../store/navSlice';

const MainPage = () => {
  const { gender, category } = useParams(); //из path сможем достать категории
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goods);
  const { activeGender, categories } = useSelector((state) => state.navigation);

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category]);

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
