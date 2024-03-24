import { useFavCampers } from 'hooks/useFavCampers';
import CamperCard from 'components/CamperCard/CamperCard';
import css from './FavCampers.module.css';

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
