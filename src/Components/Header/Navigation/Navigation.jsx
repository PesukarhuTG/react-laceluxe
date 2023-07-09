import Container from '../../Layout/Container/Container';
import Gender from './Gender/Gender';
import Category from './Category/Category';

const Navigation = () => {
  return (
    <Container>
      <Gender />
      <Category />
    </Container>
  );
};

export default Navigation;
