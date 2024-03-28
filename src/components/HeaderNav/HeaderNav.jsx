import { NavLink } from 'react-router-dom';
import css from './HeaderNav.module.css';

const HeaderNav = () => {
  return (
    <>
      <nav>
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
    </>
  );
};

export default HeaderNav;
