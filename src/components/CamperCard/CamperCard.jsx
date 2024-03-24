import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFavCampers } from 'hooks/useFavCampers';
import { setFavCampers } from '../../redux/campers/campersSlice';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Option from 'components/Option/Option';
import Price from 'components/Price/Price';
import Modal from 'components/Modal/Modal';
import CamperDetails from 'components/CamperDetails/CamperDetails';
import Rating from 'components/Rating/Rating';
import CardImg from 'components/CardImg/CardImg';
import css from './CamperCard.module.css';

const CamperCard = ({ data }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const dispatch = useDispatch();
  const favCampers = useFavCampers();

  const toggleFavorite = () => {
    dispatch(setFavCampers(data));
  };

  const openModal = () => {
    setOpenDetailsModal(!openDetailsModal);
  };

  return (
    <>
      <li className={css.card_item}>
        <CardImg src={data.gallery[0]} alt={'Camper ' + data.name} />
        <div className={css.card_info_wrap}>
          <div>
            <div className={css.card_title_wrap}>
              <h2 className={css.card_title}>{data.name}</h2>
              <div className={css.card_price_wrap}>
                <Price className={css.card_title} price={data.price} />
                <Button onClick={toggleFavorite}>
                  <Icon className={css.favorite_icon} id="heart" />
                </Button>
              </div>
            </div>
            <Rating data={data} />
          </div>
          <p className={css.card_description}>{data.description}</p>
          <div className={css.card_option_wrap}>
            <Option id="adults">{data.adults + ' adults'}</Option>
            <Option id="transmission">{data.transmission}</Option>
            <Option id="fuel">{data.engine}</Option>
            <Option id="kitchen">Kitchen</Option>
            <Option id="bed">{data.details.beds + ' beds'}</Option>
            <Option id="AC">AC</Option>
          </div>
          <div>
            <Button className={css.card_info_btn} onClick={openModal}>
              Show more
            </Button>
          </div>
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
