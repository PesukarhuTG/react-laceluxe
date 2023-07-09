import Container from '../../Layout/Container/Container';
import Gender from './Gender/Gender';
import Category from './Category/Category';
import { useDispatch } from 'react-redux';
import { setActiveGender } from '../../../store/navigationSlice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = ({ list }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender]);

  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  );
};

export default Navigation;
