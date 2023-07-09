import { NavLink, useLocation } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';

const Gender = ({ list }) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  return (
    <ul className={style.gender}>
      {list.map((item) => {
        return (
          <li className={style.item} key={item.link}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  style.link,
                  (isActive || gender === item.link) && style.linkActive
                )
              }
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Gender;
