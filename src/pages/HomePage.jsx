import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteFilteredCampers,
  deleteShownCampers,
} from 'store/campers/campersSlice';
import { Swipe } from 'components/HomePage/Swipe';
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
