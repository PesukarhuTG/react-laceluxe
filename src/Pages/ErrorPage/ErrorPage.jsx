import { useRouteError } from 'react-router-dom';
import Container from '../../Components/Layout/Container/Container';
//import style from './ErrorPage.module.scss';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container>
      <h2>Ошибка 404</h2>
      <p>{error?.message || 'Неизвестная ошибка, попробуйте позже'}</p>
    </Container>
  );
};

export default ErrorPage;
