import css from './Features.module.css';

const Features = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.wrapper_active}></span>
      <div className={css.features_wrap}>Features</div>
    </div>
  );
};

export default Features;
