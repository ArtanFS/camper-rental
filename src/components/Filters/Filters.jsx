import FilterEquipment from 'components/FilterEquipment/FilterEquipment';
import FilterType from 'components/FilterType/FilterType';
import FilterLocation from 'components/FilterLocation/FilterLocation';
import css from './Filters.module.css';
import { Form, Formik } from 'formik';
import Button from 'components/Button/Button';
import { useState } from 'react';

const Filters = () => {
  const [filterLocation, setFilterLocation] = useState('');
  const [filterEquipment, setFilterEquipment] = useState([]);
  const [filterType, setFilterType] = useState('');

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

  return (
    <Formik
      initialValues={{
        options: [],
        form: '',
      }}
      // onSubmit={handleSubmit}
    >
      <Form className={css.filters_form}>
        {/* <div className={css.filters_wrap}> */}
        <div>
          <h2 className={css.filter_location_title}>Location</h2>
          <FilterLocation
            inputLocation={handlerFilterLocation}
            value={filterLocation}
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
        {/* </div> */}
        <div>
          <Button type="submit" className={css.filter_btn}>
            Search
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Filters;
