import CardImg from 'components/CatalogPage/CatalogCardImg/CatalogCardImg';
import css from './CatalogNoCard.module.css';
import noCamp from 'images/noimage/nocamp.jpg';

export const CatalogNoCard = () => {
  return (
    <li className={css.card_item}>
      <CardImg src={noCamp} alt={'No campers found'} />
      <div className={css.card_info_wrap}>
        <p className={css.card_title}>Sorry,</p>
        <p className={css.card_title}>but we currently have no campers</p>
        <p className={css.card_title}>that match your request</p>
      </div>
    </li>
  );
};
