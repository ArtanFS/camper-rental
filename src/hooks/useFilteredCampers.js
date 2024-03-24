import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '../redux/campers/campersSelectors';

export const useFilteredCampers = () => useSelector(selectFilteredCampers);
