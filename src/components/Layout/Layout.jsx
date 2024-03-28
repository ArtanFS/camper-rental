import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.wrap}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
