import Button from 'components/Button/Button';
import CamperCard from 'components/CamperCard/CamperCard';
import css from './Catalog.module.css';

const Catalog = ({ campers, onClick, isLoadMore, filtered }) => {
  return (
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {campers.length > 0 &&
          campers.map(camper => <CamperCard key={camper._id} data={camper} />)}
      </ul>
      {campers.length > 0 && filtered && (
        <Button
          className={css.loadmore_btn}
          onClick={onClick}
          disabled={!isLoadMore}
        >
          {isLoadMore ? 'Load more' : 'No more campers'}
        </Button>
      )}
    </section>
  );
};

export default Catalog;
