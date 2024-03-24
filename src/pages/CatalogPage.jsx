import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import { getCampers, getCampersByPage } from '../redux/campers/campersApi';
import { useShownCampers } from 'hooks/useShownCampers';
import { useFilteredCampers } from 'hooks/useFilteredCampers';
import { useCampers } from 'hooks/useCampers';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [isLoadMore, setIisLoadMore] = useState(true);

  const dispatch = useDispatch();

  const campers = useShownCampers();
  const filteredCampers = useFilteredCampers();
  const allCampers = useCampers();

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

  return (
    <>
      <Filters />
      <Catalog
        campers={campers}
        onClick={getMoreCampers}
        isLoadMore={isLoadMore}
      />
    </>
  );
};

export default CatalogPage;
