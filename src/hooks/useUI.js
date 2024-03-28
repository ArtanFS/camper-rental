import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from '../redux/campers/campersSelectors';

export const useIsLoading = () => useSelector(selectIsLoading);

export const useError = () => useSelector(selectError);
