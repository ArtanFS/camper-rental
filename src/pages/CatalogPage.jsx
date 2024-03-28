import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import { getCampers, getCampersByPage } from '../redux/campers/campersApi';
import { useShownCampers } from 'hooks/useShownCampers';
import { useFilteredCampers } from 'hooks/useFilteredCampers';
import { useCampers } from 'hooks/useCampers';
import css from './CatalogPage.module.css';
import { useIsLoading } from 'hooks/useUI';
import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [isLoadMore, setIisLoadMore] = useState(true);
  const isLoading = useIsLoading();

  const dispatch = useDispatch();

  const campers = useShownCampers();
  const allCampers = useCampers();
  const filteredCampers = useFilteredCampers();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCampersByPage(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (page > allCampers.length / 4) setIisLoadMore(false);
    else setIisLoadMore(true);
  }, [page, allCampers]);

  const getMoreCampers = () => {
    setPage(prev => prev + 1);
  };

  const data = filteredCampers.length > 0 ? filteredCampers : campers;
  const filtered = filteredCampers.length > 0 ? false : true;

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        {isLoading && <Loader />}
        <Filters />
        <Catalog
          campers={data}
          onClick={getMoreCampers}
          isLoadMore={isLoadMore}
          filtered={filtered}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
