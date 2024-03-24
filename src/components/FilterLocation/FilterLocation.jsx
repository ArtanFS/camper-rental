import { Field } from 'formik';
import Icon from 'components/Icon/Icon';
import css from './FilterLocation.module.css';

const FilterLocation = ({ inputLocation, value }) => {
  return (
    <>
      <Field
        type="text"
        name="city"
        placeholder="City"
        className={css.filter_location_input}
        value={value}
        onChange={inputLocation}
      />
      <Icon className={css.filter_location_icon} id="locate" />
    </>
  );
};

export default FilterLocation;
