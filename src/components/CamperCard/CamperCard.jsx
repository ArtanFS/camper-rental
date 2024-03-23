import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Location from 'components/Location/Location';
import Option from 'components/Option/Option';
import Price from 'components/Price/Price';
import Rating from 'components/Rating/Rating';
import css from './CamperCard.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import CamperDetails from 'components/CamperDetails/CamperDetails';

const CamperCard = ({ data }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const openModal = () => {
    setOpenDetailsModal(!openDetailsModal);
  };

  return (
    <>
      <li className={css.card_item}>
        <div className={css.card_img_wrap}>
          <img
            className={css.card_img}
            src={data.gallery[0]}
            alt=""
            width={290}
            height={310}
          />
        </div>
        <div className={css.card_info_wrap}>
          <div className={css.card_title_wrap}>
            <h2 className={css.card_title}>{data.name}</h2>
            <div className={css.card_price_wrap}>
              <Price className={css.card_title} price={data.price} />
              <Button>
                <Icon className={css.favorite_icon} id="heart" />
              </Button>
            </div>
          </div>
          <div className={css.card_rating_wrap}>
            <Rating
              className={css.card_rating}
              classNameIcon={css.card_rating_icon}
              rating={data.rating}
              reviews={data.reviews.length}
            />
            <Location
              className={css.card_location}
              classNameIcon={css.card_location_icon}
              location={data.location}
            />
          </div>
          <p className={css.card_description}>{data.description}</p>
          <div className={css.card_option_wrap}>
            <Option
              className={css.card_option}
              classNameIcon={css.card_option_icon}
              id="adults"
            >
              {data.adults + ' adults'}
            </Option>
            <Option
              className={css.card_option}
              classNameIcon={css.card_option_icon}
              id="transmission"
            >
              {data.transmission}
            </Option>
            <Option
              className={css.card_option}
              classNameIcon={css.card_option_icon}
              id="fuel"
            >
              {data.engine}
            </Option>
            {data.details.kitchen && (
              <Option
                className={css.card_option}
                classNameIcon={css.card_option_icon}
                id="kitchen"
              >
                Kitchen
              </Option>
            )}
            <Option
              className={css.card_option}
              classNameIcon={css.card_option_icon}
              id="bed"
            >
              {data.details.beds + ' beds'}
            </Option>
            {data.details.airConditioner && (
              <Option
                className={css.card_option}
                classNameIcon={css.card_option_icon}
                id="AC"
              >
                AC
              </Option>
            )}
          </div>
          <Button className={css.card_info_btn} onClick={openModal}>
            Show more
          </Button>
        </div>
      </li>
      {openDetailsModal && (
        <Modal openModal={openModal}>
          <CamperDetails data={data} closeModal={openModal} />
        </Modal>
      )}
    </>
  );
};

export default CamperCard;
