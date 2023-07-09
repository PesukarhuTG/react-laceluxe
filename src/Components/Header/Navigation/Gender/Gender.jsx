import style from './Gender.module.scss';

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
            <a className={style.link} href={item.link}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Gender;
