import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import { getCampers } from '../redux/campers/campersApi';
// import { useCampers } from 'hooks/useCampers';
// import allCampers from '../db/campers.json';

const CatalogPage = () => {
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getCampersByPage(page));
  // }, [dispatch, page]);

  // const getMoreCampers = () => {
  //   setPage(prev => prev + 1);
  // };

  return (
    <>
      <Filters />
      <Catalog
      // loadMore={getMoreCampers}
      // isLoadMore={isLoadMore}
      />
    </>
  );
};

export default CatalogPage;
