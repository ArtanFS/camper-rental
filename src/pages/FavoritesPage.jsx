import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteFilteredCampers,
  deleteShownCampers,
} from 'store/campers/campersSlice';
import FavCampers from 'components/FavCampers/FavCampers';

const FavoritesPage = () => {
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
