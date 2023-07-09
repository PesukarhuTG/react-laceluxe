import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

const Category = ({list}) => {
  console.log(list);
  return (
    <ul className={style.category}>
      {list[0].categories.map((item) => {
        return (
          <li key={item.link}>
            <NavLink className={({isActive}) => cn(style.link, isActive && style.linkActive )} to={`${list[0].link}/${item.link}`}>{item.title}</NavLink>
          </li>
        );
      })}
    </ul>
  )
};

export default Category;