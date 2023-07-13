import { useRouteError } from 'react-router-dom';
import style from './ErrorPage.module.scss';
import Container from '../Layout/Container/Container';

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
