import { Field } from 'formik';
import Icon from 'components/Icon/Icon';
import css from './FilterLocation.module.css';

const FilterLocation = ({ inputLocation, value }) => {
  return (
    <div className={css.location_input_wrap}>
      <Field
        type="text"
        name="city"
        placeholder="City"
        className={css.location_input}
        value={value}
        onChange={inputLocation}
      />
      <Icon className={css.location_icon} id="locate" />
    </div>
  );
};

export default FilterLocation;
