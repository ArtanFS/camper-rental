import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav>
          <ul className={css.nav_list}>
            <li className={css.nav_list_item}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={css.nav_list_item}>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li className={css.nav_list_item}>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
