import Top from './Top/Top';
import Navigation from './Navigation/Navigation';

const Header = ({list}) => {
  return (
    <>
      <Top />
      <Navigation list={list}/>
    </>
  );
};

export default Header;
