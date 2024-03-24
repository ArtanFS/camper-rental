import Catalog from 'components/Catalog/Catalog';
import Filters from 'components/Filters/Filters';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCampers, getCampersByPage } from '../redux/campers/campersApi';
// import { useCampers } from 'hooks/useCampers';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  // const [btn, setBtn] = useState(2);
  const dispatch = useDispatch();
  // const campers = useCampers();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCampersByPage(page));
  }, [dispatch, page]);

  const getMoreCampers = () => {
    setPage(prev => prev + 1);
  };
  // console.log(btn);

  // const cards = campers.length;
  // if (!Number.isInteger(cards / 4))
  // setBtn(5);
  // console.log(btn);

  return (
    <>
      <Filters />
      <Catalog loadMore={getMoreCampers} />
    </>
  );
};

export default CatalogPage;
