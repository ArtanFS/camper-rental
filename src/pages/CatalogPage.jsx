import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCampers, getCampersByPage } from '../redux/campers/campersApi';
import {
  useCampers,
  useFilteredCampers,
  useShownCampers,
} from 'hooks/useCampers';
import { useIsLoading } from 'hooks/useUI';
import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import Loader from 'components/Loader/Loader';
import css from './CatalogPage.module.css';

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
