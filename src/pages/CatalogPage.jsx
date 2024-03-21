import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCampers } from '../redux/campers/campersApi';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <>
      <Filters />
      <Catalog />
    </>
  );
};

export default CatalogPage;
