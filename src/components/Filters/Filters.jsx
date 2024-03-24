import FilterEquipment from 'components/FilterEquipment/FilterEquipment';
import FilterType from 'components/FilterType/FilterType';
import LocationInput from 'components/LocationInput/LocationInput';
import css from './Filters.module.css';
import { Form, Formik } from 'formik';

const Filters = () => {
  return (
    <Formik
      initialValues={{
        options: [],
        form: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.filter_location_form}>
        <div className={css.filters_wrap}>
          <div className={css.filter_location}>
            <h2 className={css.filter_location_title}>Location</h2>
            <LocationInput />
          </div>
          <div>
            <h2 className={css.filters_title}>Filters</h2>
            <div>
              <h3 className={css.filters_type_title}>Vehicle equipment</h3>
              <FilterEquipment />
            </div>
            <div>
              <h3 className={css.filters_type_title}>Vehicle type</h3>
              <FilterType />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Filters;
