import { Field } from 'formik';
import Icon from 'components/Icon/Icon';
import css from './FilterLocation.module.css';
import Button from 'components/Button/Button';

const FilterLocation = ({ inputLocation, value, openList, list }) => {
  console.log(list);
  console.log(openList);

  return (
    <>
      <div className={css.location_input_wrap}>
        <Field
          type="text"
          name="city"
          placeholder="City                            not work :((("
          className={css.location_input}
          value={value}
          onChange={inputLocation}
        />
        <Icon className={css.location_icon} id="locate" />
      </div>
      {openList && list.length > 0 && (
        <div>
          <ul>
            {list.map(({ id, city }) => (
              <li key={id}>
                <Button>
                  {/* onClick={() => handleModelClick(model)} */}
                  {city}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FilterLocation;
