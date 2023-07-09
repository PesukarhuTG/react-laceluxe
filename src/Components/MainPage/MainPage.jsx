import { useParams } from 'react-router-dom';
import styles from './MainPage.module.scss';
import Container from '../Layout/Container/Container';

const MainPage = ({ gender = 'women' }) => {
  const { category } = useParams(); //из path сможем достать категории

  return (
    <Container>
      <p>MainPage {gender}</p>
      {category && <p>Категория: {category} </p>}
    </Container>
  );
};

export default MainPage;
