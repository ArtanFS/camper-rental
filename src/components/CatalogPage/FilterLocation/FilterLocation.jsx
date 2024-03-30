import { useEffect, useState } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import { useCampers } from 'hooks/useCampers';
import { Icon, Button } from 'components/UI';
import css from './FilterLocation.module.css';

export const FilterLocation = ({ setLocation }) => {
  const [queryLocation, setQueryLocation] = useState('');
  const [openListLocation, setOpenListLocation] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isClickLocation, setIsClickLocation] = useState(false);

  const allCampers = useCampers();

  useEffect(() => {
    let allLocations = [];
    let filteredLocations = [];

    for (const camper of allCampers) {
      const arr = camper.location.split(', ');
      allLocations.push([arr[1], arr[0]].join(', '));
    }

    allLocations = allLocations
      .filter((value, idx, arr) => arr.indexOf(value) === idx)
      .sort();

    if (queryLocation) {
      filteredLocations = allLocations.filter(city =>
        city
          .toLocaleLowerCase()
          .includes(queryLocation.toLocaleLowerCase().trim())
      );

      filteredLocations = filteredLocations.map((city, idx) => ({
        id: idx + 1,
        city,
      }));
      setFilteredLocations(filteredLocations);

      !isClickLocation && setOpenListLocation(true);
    } else setOpenListLocation(false);
  }, [allCampers, queryLocation, isClickLocation]);

  const handlerQueryLocation = ({ target }) => {
    setQueryLocation(target.value);
    setIsClickLocation(false);
    setLocation(target.value);
  };

  const handleClickCity = city => {
    setQueryLocation(city);
    setIsClickLocation(true);
    setOpenListLocation(false);
    setLocation(city);
  };

  const handleCloseList = () => {
    setTimeout(() => setOpenListLocation(false), 150);
  };

  return (
    <>
      <div className={css.location_input_wrap}>
        <Field
          type="text"
          name="city"
          placeholder="City"
          className={css.location_input}
          value={queryLocation}
          onChange={handlerQueryLocation}
          onBlur={handleCloseList}
        />
        <Icon className={css.location_icon} id="locate" />
      </div>
      {openListLocation && (
        <div className={css.list_wrap}>
          <ul className={css.list}>
            {filteredLocations.length > 0 ? (
              filteredLocations.map(({ id, city }) => (
                <li key={id}>
                  <Button
                    className={css.list_item}
                    onClick={() => handleClickCity(city)}
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
