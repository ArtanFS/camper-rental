import { useSelector } from 'react-redux';
import { selectCampers } from '../redux/campers/campersSelectors';

export const useCampers = () => useSelector(selectCampers);
