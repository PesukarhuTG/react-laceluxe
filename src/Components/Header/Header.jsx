import Top from './Top/Top';
import Navigation from './Navigation/Navigation';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Top />
      <Navigation />
    </header>
  );
};

export default Header;
