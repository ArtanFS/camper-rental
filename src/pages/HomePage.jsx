import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteFilteredCampers,
  deleteShownCampers,
} from '../redux/campers/campersSlice';
import { Swipe } from 'components/HomePage';
import css from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteShownCampers());
    dispatch(deleteFilteredCampers());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Swipe />
    </div>
  );
};

export default HomePage;
