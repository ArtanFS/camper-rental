import { Loader } from 'components/UI';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import HeaderNav from 'components/HeaderNav/HeaderNav';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <HeaderNav />
        </div>
      </header>
      <main className={css.main}>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
