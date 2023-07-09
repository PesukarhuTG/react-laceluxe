import { useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Ошибка 404</h2>
      <p>{error?.message || 'Неизвестная ошибка, попробуйте позже'}</p>
    </div>
  );
};

export default ErrorPage;
