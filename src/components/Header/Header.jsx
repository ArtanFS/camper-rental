import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <ul className={css.nav_list}>
            <li>
              <NavLink to="/" className={css.nav_list_item}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={css.nav_list_item}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={css.nav_list_item}>
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
