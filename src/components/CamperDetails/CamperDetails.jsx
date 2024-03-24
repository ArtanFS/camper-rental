import Rating from 'components/Rating/Rating';
import css from './CamperDetails.module.css';
import Price from 'components/Price/Price';
import { useState } from 'react';
import CardImg from 'components/CardImg/CardImg';
import Button from 'components/Button/Button';
import Features from 'components/Features/Features';
import Reviewes from 'components/Reviews/Reviews';

const CamperDetails = ({ data }) => {
  const [isShowFeatures, setIsShowFeatures] = useState(false);
  const [isShowReviews, setIsShowReviews] = useState(false);

  const { _id, name, price, gallery, description } = data;

  const showFeatures = () => {
    setIsShowFeatures(true);
    setIsShowReviews(false);
  };

  const showReviews = () => {
    setIsShowFeatures(false);
    setIsShowReviews(true);
  };

  return (
    <div className={css.details_wrap}>
      <div>
        <h2 className={css.card_title}>{name}</h2>
        <div className={css.card_rating_wrap}>
          <Rating data={data} />
        </div>
        <Price className={css.card_title} price={price} />
      </div>
      <div className={css.scroll_container_wrap}>
        <div className={css.scroll_container}>
          <div className={css.card_info}>
            <ul className={css.card_img_wrap}>
              {gallery.length > 0 &&
                gallery.map(img => (
                  <li key={_id}>
                    <CardImg src={img} alt={'Camper ' + name} />
                  </li>
                ))}
            </ul>
            <p className={css.card_description}>{description}</p>
            <div>
              <ul className={css.info_list}>
                <li className={css.info_item}>
                  <Button
                    className={css.info_item_title}
                    onClick={showFeatures}
                  >
                    Features
                  </Button>
                </li>
                <li className={css.info_item}>
                  <Button className={css.info_item_title} onClick={showReviews}>
                    Reviews
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          {isShowFeatures && <Features data={data} />}
          {isShowReviews && <Reviewes />}
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
