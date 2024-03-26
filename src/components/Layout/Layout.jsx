import Loader from 'components/Loader/Loader';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from 'components/Header/Header';

const Layout = () => {
  useEffect(() => {
    const isPageRefreshed =
      performance.getEntriesByType('navigation')[0].type === 'reload';

    if (isPageRefreshed) window.location.replace('/campersrent');
  }, []);

  return (
    <>
      <Header />
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

export default Layout;
