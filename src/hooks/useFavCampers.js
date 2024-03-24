import { useSelector } from 'react-redux';
import { selectFavCampers } from '../redux/campers/campersSelectors';

export const useFavCampers = () => useSelector(selectFavCampers);
