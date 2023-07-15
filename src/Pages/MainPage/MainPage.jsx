import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../store/goodSlice';
import { setActiveGender } from '../../store/navSlice';
import Goods from '../../Components/Goods/Goods';
import Banner from '../../Components/Banner/Banner';

const MainPage = () => {
  const { gender, category } = useParams(); //из path сможем достать категории
  const dispatch = useDispatch();
  const { activeGender, categories, genderList } = useSelector(
    (state) => state.navigation
  );

  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find((item) => item.slug === category);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, dispatch]);

  return (
    <>
      { !category && <Banner data={genderData?.banner} />}
      <Goods title={categoryData?.title} />
    </>
  );
};

export default MainPage;
