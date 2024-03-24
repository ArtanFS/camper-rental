// import { useShownCampers } from 'hooks/useShownCampers';
import Button from 'components/Button/Button';
import CamperCard from 'components/CamperCard/CamperCard';
import css from './Catalog.module.css';
import campers from '../../db/campers.json';

const Catalog = ({ loadMore, isLoadMore }) => {
  // const campers = useShownCampers();

  return (
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {campers.length > 0 &&
          campers.map(camper => <CamperCard key={camper._id} data={camper} />)}
      </ul>
      {campers.length > 0 && (
        <Button
          className={css.loadmore_btn}
          onClick={loadMore}
          disabled={!isLoadMore}
        >
          {isLoadMore ? 'Load more' : 'No more campers'}
        </Button>
      )}
    </section>
  );
};

export default Catalog;
