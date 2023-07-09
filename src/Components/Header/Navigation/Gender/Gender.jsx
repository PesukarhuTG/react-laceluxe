import { NavLink } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Gender = () => {
  const { activeGender, genderList, categories } = useSelector((state) => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map((item) => {
        return (
          <li className={style.item} key={item}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  style.link,
                  (isActive || activeGender === item) && style.linkActive
                )
              }
              to={item}
            >
              {categories[item].title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Gender;
