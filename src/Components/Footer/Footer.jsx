import styles from './Footer.module.scss';
import Container from '../Layout/Container/Container';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const list = [
  {
    link: 'women',
    title: 'Женщины',
    categories: [
      { link: 'bras', title: 'Бюстгалтеры' },
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pajamas', title: 'Пижамы' },
    ],
  },
  {
    link: 'men',
    title: 'Мужчины',
    categories: [
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.container}>
          <div className={styles.category}>
            <h2 className={cn(styles.title, styles.categoryTitle)}>Каталог</h2>

            <ul className={styles.categoryList}>
              {list.map((item) => {
                return (
                  <li key={item.link} >
                    <h3 className={styles.categorySubtitle}>
                      <NavLink className={styles.link} to={item.link}>
                        {item.title}
                      </NavLink>
                    </h3>
                    <ul className={styles.categorySublist}>
                      {item.categories.map((elem) => {
                        return (
                          <li key={elem.link}>
                            <NavLink className={styles.link} to={`${item.link}/${elem.link}`}>{elem.title}</NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
