import { NavLink, useLocation } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

const Category = ({list}) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  const categoriesList = list.find(item => item.link === gender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map((item) => {
        return (
          <li key={item.link}>
            <NavLink className={({isActive}) => cn(style.link, isActive && style.linkActive )} to={`${gender}/${item.link}`}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  )
};

export default Category;