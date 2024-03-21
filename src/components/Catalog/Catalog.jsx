import CamperCard from 'components/CamperCard/CamperCard';
import { useCampers } from 'hooks/useCampers';
import css from './Catalog.module.css';

const Catalog = () => {
  const campers = useCampers();

  return (
    <section className={css.catalog_section}>
      <ul className={css.card_list}>
        {campers.map(camper => (
          <CamperCard key={camper._id} data={camper} />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
