import style from './SearchPage.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import Goods from '../../Components/Goods/Goods';
import { useEffect } from 'react';
import { fetchAll } from '../../store/goodSlice';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { goodsList } = useSelector((state) => state.goods);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q'); // q - это произвольное имя
    const params = { search };
    dispatch(fetchAll(params));
  }, [searchParams, dispatch]);

  return (
          goodsList.length ? 
          <Goods title={`Результаты поиска по «${searchParams.get('q')}» `} />
          : 
          <h3 className={style.empty}>По вашему запросу «{searchParams.get('q')}» ничего не найдено </h3>
          )
};

export default SearchPage;
