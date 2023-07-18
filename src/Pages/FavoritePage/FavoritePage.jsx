import style from './FavoritePage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Goods from '../../Components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory } from '../../store/goodSlice';
import usePageFromSearchParams from '../../hooks/usePageFromSearchParams';
import Container from '../../Components/Layout/Container/Container';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };

      if (page) {
        param.page = page; //если стр есть, добавляем ее в объект
      }

      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return favorites.length ? (
    <Goods title='Избранное' />
  ) : (
    <Container>
      <h3 className={style.empty}>
        Эээх, еще ничего не добавленно в Избранное
      </h3>
    </Container>
  );
};

export default FavoritePage;
