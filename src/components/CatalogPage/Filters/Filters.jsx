import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useCampers } from 'hooks/useCampers';
import { setFilteredCampers } from 'store/campers/campersSlice';
import { FilterLocation } from '../FilterLocation';
import { FilterEquipment } from '../FilterEquipment';
import { FilterType } from '../FilterType';
import { Button } from 'components/UI';
import css from './Filters.module.css';
import classNames from 'classnames';

export const Filters = () => {
  const [filterLocation, setFilterLocation] = useState('');
  const [filterEquipment, setFilterEquipment] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [isResetFilters, setIsResetFilters] = useState(false);

  const dispatch = useDispatch();

  const allCampers = useCampers();
  let filteredCampers = [...allCampers];

  const handlerFilterLocation = city => {
    setFilterLocation(city);
    setIsResetFilters(false);
  };

  const handlerFilterEquipment = ({ target }) => {
    const arrIdx = filterEquipment.indexOf(target.value);
    if (arrIdx !== -1) {
      const arr = [
        ...filterEquipment.slice(0, arrIdx),
        ...filterEquipment.slice(arrIdx + 1),
      ];
      setFilterEquipment(arr);
    } else {
      const arr = [...filterEquipment, target.value];
      setFilterEquipment(arr);
    }
  };

  const handlerFilterType = ({ target }) => {
    setFilterType(target.value);
  };

  const handleSubmit = () => {
    if (allCampers.length === 0) return;
    if (filterLocation) {
      const arr = filterLocation.split(', ');
      filteredCampers = allCampers.filter(
        ({ location }) =>
          location.toLocaleLowerCase().search(arr[0].toLocaleLowerCase()) !== -1
      );
    }

    if (filterType)
      filteredCampers = filteredCampers.filter(
        ({ form }) => form === filterType
      );

    if (filterEquipment.length) {
      if (filterEquipment.includes('AC'))
        filteredCampers = filteredCampers.filter(
          ({ details }) => details.airConditioner > 0
        );

      if (filterEquipment.includes('transmission'))
        filteredCampers = filteredCampers.filter(
          ({ transmission }) => transmission === 'automatic'
        );

      if (filterEquipment.includes('kitchen'))
        filteredCampers = filteredCampers.filter(
          ({ details }) => details.kitchen > 0
        );

      if (filterEquipment.includes('TV'))
        filteredCampers = filteredCampers.filter(
          ({ details }) => details.TV > 0
        );

      if (filterEquipment.includes('shower'))
        filteredCampers = filteredCampers.filter(
          ({ details }) => details.shower > 0
        );
    }
    if (filteredCampers.length === 0) dispatch(setFilteredCampers([{}]));
    else dispatch(setFilteredCampers(filteredCampers));
  };

  const handleResetFilters = actions => {
    setFilterLocation('');
    setIsResetFilters(true);
    dispatch(setFilteredCampers([]));
  };

  return (
    <section className={css.section}>
      <Formik
        initialValues={{
          options: [],
          form: '',
        }}
        onSubmit={handleSubmit}
        onReset={handleResetFilters}
      >
        {({ resetForm }) => (
          <Form className={css.form}>
            <div>
              <h2 className={css.location_title}>Location</h2>
              <FilterLocation
                setLocation={handlerFilterLocation}
                reset={isResetFilters}
              />
            </div>
            <div>
              <h2 className={css.title}>Filters</h2>
              <h3 className={css.type_title}>Vehicle equipment</h3>
              <FilterEquipment setEquipment={handlerFilterEquipment} />
            </div>
            <div>
              <h3 className={css.type_title}>Vehicle type</h3>
              <FilterType setType={handlerFilterType} />
            </div>
            <div className={css.btn_wrap}>
              <Button className={css.btn} type="submit">
                Search
              </Button>
              <Button
                className={classNames(css.btn, css.btn_reset)}
                onClick={resetForm}
              >
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
