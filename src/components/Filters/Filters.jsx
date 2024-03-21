import FilterEquipment from 'components/FilterEquipment/FilterEquipment';
import FilterType from 'components/FilterType/FilterType';
import LocationInput from 'components/LocationInput/LocationInput';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <div className={css.filters_wrap}>
      <div>
        <h3>Location</h3>
        <LocationInput />
      </div>
      <div>
        <h3>Filters</h3>
        <div>
          <h2>Vehicle equipment</h2>
          <FilterEquipment />
        </div>
        <div>
          <h2>Vehicle type</h2>
          <FilterType />
        </div>
      </div>
    </div>
  );
};

export default Filters;
