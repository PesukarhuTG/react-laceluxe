import style from './ErrorPage.module.scss';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import Container from '../../Components/Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchColors } from '../../store/colorSlice';
import { fetchNavigation } from '../../store/navSlice';

const ErrorPage = () => {
  const routeError = useRouteError();
  const { status } = useSelector((state) => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/');
    }
  }, [status, location, navigate]);

  // периодическая проверка: если сервер заработал, то страница обновится с данными
  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
      }, 5000);
    }

    return () => clearInterval(timerIdRef.current);
  }, [status, location, dispatch]);

  return (
    <div className={style.error}>
      <Container>
        <h2 className={style.title}>Произошла ошибка</h2>
        <p className={style.message}>
          {routeError?.message || 'Попробуйте зайти позже'}
        </p>
      </Container>
    </div>
  );
};

export default ErrorPage;
