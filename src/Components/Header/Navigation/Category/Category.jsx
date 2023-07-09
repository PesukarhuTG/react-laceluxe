import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Category = () => {
  const { activeGender, categories } = useSelector((state) => state.navigation);

  return (
    <ul className={style.category}>
      {categories[activeGender]?.list?.map((item) => {
        return (
          <li key={item.slug}>
            <NavLink
              className={({ isActive }) =>
                cn(style.link, isActive && style.linkActive)
              }
              to={`${activeGender}/${item.slug}`}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
