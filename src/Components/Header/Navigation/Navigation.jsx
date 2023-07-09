import Container from '../../Layout/Container/Container';
import Gender from './Gender/Gender';
import Category from './Category/Category';

const Navigation = ({list}) => {
  return (
    <Container>
      <Gender list={list} />
      <Category list={list}/>
    </Container>
  );
};

export default Navigation;
