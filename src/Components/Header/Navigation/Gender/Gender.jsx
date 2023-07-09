import { NavLink } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';

const list = [
  { link: 'women', title: 'Женщины' },
  { link: 'men', title: 'Мужчины' },
];

const Gender = () => {
  return (
    <ul className={style.gender}>
      {list.map((item) => {
        return (
          <li className={style.item} key={item.link}>
            <NavLink className={({isActive}) => cn(style.link, isActive && style.linkActive )} to={item.link}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Gender;
