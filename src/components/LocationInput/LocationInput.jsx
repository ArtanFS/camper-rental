import { useState } from 'react';
import css from './LocationInput.module.css';
import { Field, Form, Formik } from 'formik';
import Icon from 'components/Icon/Icon';

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const handlerInputValue = ({ target }) => setLocation(target.value);

  return (
    <Formik initialValues={{ city: '' }}>
      <Form className={css.filter_location_form}>
        <Field
          type="text"
          name="city"
          placeholder="City"
          className={css.filter_location_input}
          value={location}
          onChange={handlerInputValue}
        />
        <Icon className={css.filter_location_icon} id="locate" />
      </Form>
    </Formik>
  );
};

export default LocationInput;
