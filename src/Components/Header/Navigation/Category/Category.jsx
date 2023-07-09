import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Category = ({list}) => {
  const { activeGender } = useSelector((state) => state.navigation);
  const categoriesList = list.find(item => item.link === activeGender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map((item) => {
        return (
          <li key={item.link}>
            <NavLink className={({isActive}) => cn(style.link, isActive && style.linkActive )} to={`${activeGender}/${item.link}`}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  )
};

export default Category;