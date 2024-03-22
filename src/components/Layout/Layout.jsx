import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>
          <div>
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
        </div>
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
