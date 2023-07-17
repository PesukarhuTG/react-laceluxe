import Container from '../../Layout/Container/Container';
import cn from 'classnames';
import style from './Top.module.scss';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../../store/searchSlice';

const Top = () => {
  const { countItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    dispatch(toggleSearch());
  };

  return (
    <div className={style.top}>
      <Container className={style.topContainer}>
        <a
          href='tel:+79304902620'
          className={cn(style.topLink, style.topPhone)}
        >
          8 930 490 26 20
        </a>

        <NavLink to='/' className={style.topLogo}>
          <img src={logo} alt='Логотип Inspired' />
        </NavLink>

        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li>
              <button className={style.topLink} onClick={handleOpenSearch}>
                <SearchSVG />
              </button>
            </li>
            <li>
              <NavLink to={'/cart'} className={style.topLink}>
                <CartSVG />
                <span className={style.topLinkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/favorite'}
                className={cn(style.topLink, style.topLike)}
              >
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Top;
