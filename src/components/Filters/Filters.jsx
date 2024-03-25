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
  const [filterLocation, setFilterLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [openListLocation, setOpenListLocation] = useState(false);
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

    if (filterLocation) {
      filteredLocations = allLocations.filter(city =>
        city
          .toLocaleLowerCase()
          .includes(filterLocation.toLocaleLowerCase().trim())
      );

      filteredLocations = filteredLocations.map((city, idx) => ({
        id: idx + 1,
        city,
      }));
      setFilteredLocations(filteredLocations);

      // console.log('No cities', filteredLocations);
      setOpenListLocation(true);
    } else setOpenListLocation(false);
  }, [allCampers, filterLocation]);

  // console.log('Cities: ', filteredLocations);

  const handlerFilterLocation = ({ target }) => setFilterLocation(target.value);

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

  const handleSubmit = () => {
    if (allCampers.length === 0) return;
    if (filterLocation) {
      filteredCampers = allCampers.filter(
        // ({ location }) => location === filterLocation
        ({ location }) => location.search(filterLocation) !== -1
      );
      console.log(filteredCampers);
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
    dispatch(setFilteredCampers(filteredCampers));
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
            inputLocation={handlerFilterLocation}
            value={filterLocation}
            openList={openListLocation}
            list={filteredLocations}
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
