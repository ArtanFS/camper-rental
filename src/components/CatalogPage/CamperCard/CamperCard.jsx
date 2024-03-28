import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFavCampers } from '../../../redux/campers/campersSlice';
import Button from 'components/UI/Button/Button';
import Icon from 'components/UI/Icon/Icon';
import Option from 'components/CatalogPage/Option/Option';
import Price from 'components/CatalogPage/Price/Price';
import Modal from 'components/Modal/Modal';
import CamperDetails from 'components/CamperDetails/CamperDetails';
import Rating from 'components/CatalogPage/Rating/Rating';
import CardImg from 'components/CatalogPage/CardImg/CardImg';
import css from './CamperCard.module.css';
import classNames from 'classnames';
import { useFavCampers } from 'hooks/useCampers';

const CamperCard = ({ data }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const {
    _id,
    gallery,
    name,
    price,
    description,
    adults,
    transmission,
    engine,
    details,
  } = data;
  const favCampers = useFavCampers();

  useEffect(() => {
    const favCampIdx = favCampers.findIndex(camper => camper._id === _id);
    if (favCampIdx !== -1) setIsFavorite(true);
    else setIsFavorite(false);
  }, [favCampers, _id]);

  const toggleFavorite = () => {
    dispatch(setFavCampers(data));
  };

  const openModal = () => {
    setOpenDetailsModal(!openDetailsModal);
  };

  return (
    <>
      <li className={css.card_item}>
        <CardImg src={gallery[0]} alt={'Camper ' + name} />
        <div className={css.card_info_wrap}>
          <div>
            <div className={css.card_title_wrap}>
              <h2 className={css.card_title}>{name}</h2>
              <div className={css.card_price_wrap}>
                <Price className={css.card_title} price={price} />
                <Button onClick={toggleFavorite}>
                  <Icon
                    className={classNames(
                      css.favorite_icon,
                      isFavorite && css.favorite_active_icon
                    )}
                    id={isFavorite ? 'heart_full' : 'heart'}
                  />
                </Button>
              </div>
            </div>
            <Rating data={data} />
          </div>
          <p className={css.card_description}>{description}</p>
          <div className={css.card_option_wrap}>
            <Option id="adults">{adults + ' adults'}</Option>
            <Option id="transmission">{transmission}</Option>
            <Option id="fuel">{engine}</Option>
            <Option id="kitchen">Kitchen</Option>
            <Option id="bed">{details.beds + ' beds'}</Option>
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
