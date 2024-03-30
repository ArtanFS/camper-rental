import { CatalogCard } from 'components/CatalogPage/CatalogCard';
import css from './FavCampers.module.css';
import { useFavCampers } from 'hooks/useCampers';

const FavCampers = () => {
  const favCampers = useFavCampers();

  return (
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {favCampers.length > 0 &&
          favCampers.map(camper => (
            <CatalogCard key={camper._id} data={camper} />
          ))}
      </ul>
    </section>
  );
};

export default FavCampers;
