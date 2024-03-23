import { useState } from 'react';
import css from './LocationInput.module.css';
import { Field, Form, Formik } from 'formik';

const LocationInput = () => {
  const [location, setLocation] = useState(null);

  const handlerInputValue = ({ target }) => setLocation(target.value);

  return (
    <div>
      LocInput
      <Formik>
        <Form>
          <Field
            type="text"
            name="location"
            placeholder="Title"
            className={css.editColumn_input}
            autoFocus
            value={location}
            onChange={handlerInputValue}
          ></Field>
        </Form>
      </Formik>
    </div>
  );
};

export default LocationInput;
