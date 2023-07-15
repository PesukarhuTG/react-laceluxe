import { useDispatch, useSelector } from 'react-redux';
import Goods from '../../Components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory, } from '../../store/goodSlice';
import usePageFromSearchParams from '../../hooks/usePageFromSearchParams';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const pageURL = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      dispatch(fetchCategory({ list: favorites }));
    }
  }, [favorites, dispatch]);

  return <Goods title='Избранное' />;
};

export default FavoritePage;
