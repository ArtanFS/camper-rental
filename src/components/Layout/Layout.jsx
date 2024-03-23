import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
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
      <main className={css.main}>
        <div className={classNames(css.container, css.main_container)}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
