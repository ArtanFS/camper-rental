import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectFavCampers,
  selectFilteredCampers,
  selectShownCampers,
} from 'store/campers/campersSelectors';

export const useCampers = () => useSelector(selectCampers);

export const useShownCampers = () => useSelector(selectShownCampers);

export const useFilteredCampers = () => useSelector(selectFilteredCampers);

export const useFavCampers = () => useSelector(selectFavCampers);
