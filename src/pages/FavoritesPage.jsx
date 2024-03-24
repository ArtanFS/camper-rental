import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteShownCampers } from '../redux/campers/campersSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteShownCampers());
  }, [dispatch]);

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;
