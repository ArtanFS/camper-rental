import { Field } from 'formik';
import Icon from 'components/Icon/Icon';
import css from './FilterLocation.module.css';
import Button from 'components/Button/Button';
import classNames from 'classnames';

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
        <div className={css.list_wrap}>
          <ul className={css.list}>
            {list.map(({ id, city }) => (
              <li key={id}>
                <Button className={css.list_item}>
                  {/* onClick={() => handleModelClick(model)} */}
                  <Icon
                    className={classNames(
                      css.location_icon,
                      css.list_item_icon
                    )}
                    id="locate"
                  />
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
