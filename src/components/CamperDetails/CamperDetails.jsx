import Rating from 'components/Rating/Rating';
import css from './CamperDetails.module.css';
import Price from 'components/Price/Price';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
// import classNames from 'classnames';

const CamperDetails = ({ data }) => {
  return (
    <div className={css.details_wrap}>
      <h2 className={css.card_title}>{data.name}</h2>
      <div className={css.card_rating_wrap}>
        {/* <Rating
          className={css.card_rating}
          classNameIcon={css.card_rating_icon}
          rating={data.rating}
          reviews={data.reviews.length}
        />
        <Location
          className={css.card_location}
          classNameIcon={css.card_location_icon}
          location={data.location}
        /> */}
      </div>
      <Price className={css.card_title} price={data.price} />
      <div className={css.scroll_container_wrap}>
        <div className={css.scroll_container}>
          <div className={css.card_info}>
            <ul className={css.card_img_wrap}>
              {data.gallery.length > 0 &&
                data.gallery.map(img => (
                  <li key={data._id} className={css.card_img_item}>
                    <img
                      className={css.card_img}
                      src={img}
                      alt=""
                      width={290}
                      height={310}
                    />
                  </li>
                ))}
            </ul>
            <p className={css.card_description}>{data.description}</p>
            <div>
              <ul className={css.info_list}>
                <li className={css.info_item}>
                  <Link className={css.info_item_title} to="features">
                    Features
                  </Link>
                </li>
                <li className={css.info_item}>
                  <Link className={css.info_item_title} to="reviews">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
