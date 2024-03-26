import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteFilteredCampers,
  deleteShownCampers,
} from '../redux/campers/campersSlice';
import FavCampers from 'components/FavCampers/FavCampers';

const FavoritesPage = () => {
  useEffect(() => {
    const isPageRefreshed =
      performance.getEntriesByType('navigation')[0].type === 'reload';

    if (isPageRefreshed) window.location.replace('/campersrent');
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteShownCampers());
    dispatch(deleteFilteredCampers());
  }, [dispatch]);

  return (
    <>
      <FavCampers />
    </>
  );
};

export default FavoritesPage;
