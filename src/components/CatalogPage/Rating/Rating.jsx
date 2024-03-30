import { Icon } from 'components/UI';
import css from './Rating.module.css';

const Rating = ({ data }) => {
  const { rating, reviews, location } = data;

  const arr = location.split(', ');
  const addr = [arr[1], arr[0]].join(', ');

  return (
    <div className={css.rating_wrap}>
      <div className={css.rating}>
        <Icon className={css.rating_icon} id="star" />
        <p>{rating + '(' + reviews.length + ' Reviews)'}</p>
      </div>
      <div className={css.location}>
        <Icon className={css.location_icon} id="locate" />
        <p>{addr}</p>
      </div>
    </div>
  );
};

export default Rating;
