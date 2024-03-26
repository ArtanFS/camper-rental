import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { useCampers } from 'hooks/useCampers';
import { setFilteredCampers } from '../../redux/campers/campersSlice';
import Button from 'components/Button/Button';
import FilterEquipment from 'components/FilterEquipment/FilterEquipment';
import FilterType from 'components/FilterType/FilterType';
import FilterLocation from 'components/FilterLocation/FilterLocation';
import css from './Filters.module.css';

const Filters = () => {
  const [queryLocation, setQueryLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [openListLocation, setOpenListLocation] = useState(false);
  const [isClickLocation, setIsClickLocation] = useState(false);
  const [filterEquipment, setFilterEquipment] = useState([]);
  const [filterType, setFilterType] = useState('');

  const dispatch = useDispatch();

  const allCampers = useCampers();
  let filteredCampers = [...allCampers];

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
  };

  const handlerFilterEquipment = ({ target }) => {
    const arrIdx = filterEquipment.indexOf(target.value);
    if (arrIdx !== -1) {
      const arr = [
        ...filterEquipment.slice(0, arrIdx),
        ...filterEquipment.slice(arrIdx + 1),
      ];
      // filterEquipment.splice(arrIdx, 1);
      setFilterEquipment(arr);
    } else {
      const arr = [...filterEquipment, target.value];
      setFilterEquipment(arr);
    }
  };

  const handlerFilterType = ({ target }) => {
    setFilterType(target.value);
  };

  const handleClickCity = city => {
    setQueryLocation(city);
    setIsClickLocation(true);
    setOpenListLocation(false);
  };

  const handleCloseList = () => {
    setTimeout(() => setOpenListLocation(false), 150);
  };

  const handleSubmit = () => {
    if (allCampers.length === 0) return;
    if (queryLocation) {
      const arr = queryLocation.split(', ');
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
    console.log(filteredCampers);
    if (filteredCampers.length === 0) dispatch(setFilteredCampers([{}]));
    else dispatch(setFilteredCampers(filteredCampers));
  };

  return (
    <Formik
      initialValues={{
        options: [],
        form: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.filters_form}>
        <div>
          <h2 className={css.filter_location_title}>Location</h2>
          <FilterLocation
            inputLocation={handlerQueryLocation}
            value={queryLocation}
            openList={openListLocation}
            list={filteredLocations}
            handleClick={handleClickCity}
            onBlur={handleCloseList}
          />
        </div>
        <div>
          <h2 className={css.filters_title}>Filters</h2>
          <h3 className={css.filters_type_title}>Vehicle equipment</h3>
          <FilterEquipment setEquipment={handlerFilterEquipment} />
        </div>
        <div>
          <h3 className={css.filters_type_title}>Vehicle type</h3>
          <FilterType setType={handlerFilterType} />
        </div>
        <div>
          <Button className={css.filter_btn} type="submit">
            Search
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Filters;
