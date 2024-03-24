import Swipe from 'components/Swipe/Swipe';
import css from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteFilteredCampers,
  deleteShownCampers,
} from '../redux/campers/campersSlice';

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
