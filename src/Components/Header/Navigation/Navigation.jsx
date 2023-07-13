import Container from '../../Layout/Container/Container';
import Gender from './Gender/Gender';
import Category from './Category/Category';

const Navigation = () => {
  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};

export default Navigation;
