import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../store/goodSlice';

import { setActiveGender } from '../../store/navSlice';
import Goods from '../Goods/Goods';

const MainPage = () => {
  const { gender, category } = useParams(); //из path сможем достать категории
  const dispatch = useDispatch();

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
    <>
      <div></div>
      <Goods category={category} />
    </>
  );
};

export default MainPage;
