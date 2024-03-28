import Button from 'components/UI/Button/Button';
import CamperCard from 'components/CatalogPage/CamperCard/CamperCard';
import css from './Catalog.module.css';
import NoCards from 'components/CatalogPage/NoCards/NoCards';

const Catalog = ({ campers, onClick, isLoadMore, filtered }) => {
  return (
    <section className={css.section}>
      <div className={css.scroll_container}>
        <ul className={css.card_list}>
          {campers.length > 0 &&
            (campers[0]._id ? (
              campers.map(camper => (
                <CamperCard key={camper._id} data={camper} />
              ))
            ) : (
              <NoCards />
            ))}
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
      </div>
    </section>
  );
};

export default Catalog;
