import CamperCard from 'components/CatalogPage/CatalogCard/CatalogCard';
import css from './FavCampers.module.css';
import { useFavCampers } from 'hooks/useCampers';

const FavCampers = () => {
  const favCampers = useFavCampers();

  return (
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {favCampers.length > 0 &&
          favCampers.map(camper => (
            <CamperCard key={camper._id} data={camper} />
          ))}
      </ul>
    </section>
  );
};

export default FavCampers;
