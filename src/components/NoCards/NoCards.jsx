import CardImg from 'components/CardImg/CardImg';
import css from './NoCards.module.css';
import noCamp from '../../images/noimage/nocamp.jpg';

const NoCards = () => {
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

export default NoCards;
