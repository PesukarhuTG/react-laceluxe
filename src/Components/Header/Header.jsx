import style from './Header.module.scss';
import Top from './Top/Top';
import Navigation from './Navigation/Navigation';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Search />
      <Navigation />
    </header>
  );
};

export default Header;
