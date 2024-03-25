import { Field } from 'formik';
import Icon from 'components/Icon/Icon';
import css from './FilterLocation.module.css';
import Button from 'components/Button/Button';
import classNames from 'classnames';

const FilterLocation = ({
  inputLocation,
  value,
  openList,
  list,
  handleClick,
  onBlur,
}) => {
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
          onBlur={onBlur}
        />
        <Icon className={css.location_icon} id="locate" />
      </div>
      {openList && (
        <div className={css.list_wrap}>
          <ul className={css.list}>
            {list.length > 0 ? (
              list.map(({ id, city }) => (
                <li key={id}>
                  <Button
                    className={css.list_item}
                    onClick={() => handleClick(city)}
                  >
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
              ))
            ) : (
              <p className={css.list_item}>
                <Icon
                  className={classNames(css.location_icon, css.list_item_icon)}
                  id="nolocate"
                />
                We don't have campers in this location
              </p>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default FilterLocation;
