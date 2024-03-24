// import { useShownCampers } from 'hooks/useShownCampers';
// import Button from 'components/Button/Button';
import CamperCard from 'components/CamperCard/CamperCard';
import css from './FavCampers.module.css';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCampersByPage } from '../../redux/campers/campersApi';
// import campers from '../../db/campers.json';
// import { useCampers } from 'hooks/useCampers';
import { useFavCampers } from 'hooks/useFavCampers';
// import allCampers from '../../db/campers.json';

const FavCampers = () => {
  // const dispatch = useDispatch();
  // const campers = useShownCampers();
  const favCampers = useFavCampers();

  // if (page > allCampers.length / 4) isLoadMore = false;

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
