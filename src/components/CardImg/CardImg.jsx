import css from './CardImg.module.css';

const CardImg = ({ src, alt }) => {
  return (
    <div className={css.img_wrap}>
      <img className={css.img} src={src} alt={alt} width={290} height={310} />
    </div>
  );
};

export default CardImg;
