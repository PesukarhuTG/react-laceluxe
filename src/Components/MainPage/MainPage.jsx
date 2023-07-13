import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../store/goodSlice';
import { setActiveGender } from '../../store/navSlice';
import Goods from '../Goods/Goods';
import Banner from '../Banner/Banner';

const MainPage = () => {
  const { gender, category } = useParams(); //из path сможем достать категории
  const dispatch = useDispatch();
  const { activeGender, categories } = useSelector((state) => state.navigation);

  const genderData = categories[activeGender];

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
      <Banner data={genderData?.banner} />
      <Goods categoryData={genderData?.list.find((item) => item.slug === category)}
      />
    </>
  );
};

export default MainPage;
