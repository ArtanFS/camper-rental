import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useShownCampers } from 'hooks/useShownCampers';
import { useCampers } from 'hooks/useCampers';
import { getCampersByPage } from '../../redux/campers/campersApi';
import Button from 'components/Button/Button';
import CamperCard from 'components/CamperCard/CamperCard';
import css from './Catalog.module.css';
// import campers from '../../db/campers.json';
// import allCampers from '../../db/campers.json';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [isLoadMore, setIisLoadMore] = useState(true);

  const dispatch = useDispatch();
  const allCampers = useCampers();
  const campers = useShownCampers();

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
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {campers.length > 0 &&
          campers.map(camper => <CamperCard key={camper._id} data={camper} />)}
      </ul>
      {campers.length > 0 && (
        <Button
          className={css.loadmore_btn}
          onClick={getMoreCampers}
          disabled={!isLoadMore}
        >
          {isLoadMore ? 'Load more' : 'No more campers'}
        </Button>
      )}
    </section>
  );
};

export default Catalog;
