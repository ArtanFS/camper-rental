import css from './Reviews.module.css';

const Reviews = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.wrapper_active}></span>
      <div className={css.reviews_wrap}>Reviews</div>
    </div>
  );
};

export default Reviews;
