import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

const list = [
  { link: 'bras', title: 'Бюстгалтеры' },
  { link: 'panties', title: 'Трусы' },
  { link: 'socks', title: 'Носки' },
  { link: 'bathrobes', title: 'Халаты' },
  { link: 'thermal', title: 'Термобелье' },
  { link: 'pajamas', title: 'Пижамы' },
];

const Category = () => {
  return (
    <ul className={style.category}>
      {list.map((item) => {
        return (
          <li key={item.link}>
            <NavLink className={({isActive}) => cn(style.link, isActive && style.linkActive )} to={item.link}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  )
};

export default Category;