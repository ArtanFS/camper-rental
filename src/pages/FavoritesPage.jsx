// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteShownCampers } from '../redux/campers/campersSlice';

import FavCampers from 'components/FavCampers/FavCampers';

// import { useFavCampers } from 'hooks/useFavCampers';

const FavoritesPage = () => {
  // const dispatch = useDispatch();
  // const favCampers = useFavCampers();

  // useEffect(() => {
  //   dispatch(deleteShownCampers());
  // }, [dispatch]);

  return (
    <>
      <FavCampers />
    </>
  );
};

export default FavoritesPage;
