import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/campers/campersSelectors';

export const useIsLoading = () => useSelector(selectIsLoading);

export const useError = () => useSelector(selectError);
