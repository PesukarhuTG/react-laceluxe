import { NavLink } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Gender = ({ list }) => {
  const { activeGender } = useSelector((state) => state.navigation);

  return (
    <ul className={style.gender}>
      {list.map((item) => {
        return (
          <li className={style.item} key={item.link}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  style.link,
                  (isActive || activeGender === item.link) && style.linkActive
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
