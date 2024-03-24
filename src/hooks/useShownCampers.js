import { useSelector } from 'react-redux';
import { selectShownCampers } from '../redux/campers/campersSelectors';

export const useShownCampers = () => useSelector(selectShownCampers);
