import { useDispatch, useSelector } from 'react-redux';
import Goods from '../../Components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory } from '../../store/goodSlice';
import usePageFromSearchParams from '../../hooks/usePageFromSearchParams';

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

  return <Goods title='Избранное' />;
};

export default FavoritePage;
