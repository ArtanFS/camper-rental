// import { useDispatch } from 'react-redux';
// import Icon from 'components/Icon/Icon';
import css from './FilterType.module.css';
import { Field, Form, Formik } from 'formik';
import Label from 'components/Label/Label';

const FilterType = () => {
  // const dispatch = useDispatch();

  // const currentFilter = useFilter();

  const handleChangeFilter = e => {
    // dispatch(addFilter(e.target.value));
  };

  return (
    <div className={css.filter_container}>
      <div className={css.filter_wrapper}>
        <Formik
          initialValues={{
            form: '',
          }}
        >
          <Form className={css.filter} onChange={handleChangeFilter}>
            <div role="group" className={css.radio}>
              <Field
                value="panelTrack"
                className={css.visually_hidden}
                type="radio"
                name="form"
                id="van"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="van"
                title="Van"
              />
              <Field
                value="fullyIntegrated"
                className={css.visually_hidden}
                type="radio"
                name="form"
                id="fully-int"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="fully-int"
                title="Fully Integrated"
              />
              <Field
                value="alcove"
                className={css.visually_hidden}
                type="radio"
                name="form"
                id="alcove"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="alcove"
                title="Alcove"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FilterType;
