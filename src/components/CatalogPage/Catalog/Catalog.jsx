import { CatalogCard } from '../CatalogCard';
import { CatalogNoCard } from '../CatalogNoCard';
import { Button } from 'components/UI';
import css from './Catalog.module.css';

export const Catalog = ({ campers, onClick, isLoadMore, filtered }) => {
  return (
    <section className={css.section}>
      <div className={css.scroll_container}>
        <ul className={css.card_list}>
          {campers.length > 0 &&
            (campers[0]._id ? (
              campers.map(camper => (
                <CatalogCard key={camper._id} data={camper} />
              ))
            ) : (
              <CatalogNoCard />
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
