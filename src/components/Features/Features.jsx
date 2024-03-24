import Option from 'components/Option/Option';
import css from './Features.module.css';

const Features = ({ data }) => {
  const { adults, children, transmission, engine, details } = data;
  const {
    beds,
    airConditioner,
    CD,
    hob,
    TV,
    shower,
    toilet,
    freezer,
    microwave,
  } = details;

  return (
    <div className={css.wrapper}>
      <span className={css.wrapper_active}></span>
      <div className={css.features_wrap}>
        <div className={css.camper_options_wrap}>
          <div className={css.camper_option}>
            <Option id="adults">{adults + ' adults'}</Option>
            {children > 0 && (
              <Option id="adults">{children + ' children'}</Option>
            )}
            <Option id="transmission">{transmission}</Option>
            <Option id="AC">AC</Option>
            <Option id="fuel">{engine}</Option>
            <Option id="conditioner">
              {airConditioner + ' air conditioner'}
            </Option>
            <Option id="radio">radio</Option>
            <Option id="kitchen">kitchen</Option>
            <Option id="bed">{beds + ' beds'}</Option>
            {CD > 0 && <Option id="CD">CD</Option>}
            <Option id="hob">{hob + ' hob'}</Option>
            {TV > 0 && <Option id="TV">TV</Option>}
            {shower > 0 && <Option id="shower">shower</Option>}
            {toilet > 0 && <Option id="WC">toilet</Option>}
            {freezer > 0 && <Option id="freezer">freezer</Option>}
            {microwave > 0 && <Option id="microwave">microwave</Option>}
          </div>
          <div>2</div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Features;
