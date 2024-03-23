// import { useDispatch } from 'react-redux';
import Icon from 'components/Icon/Icon';
import css from './FilterType.module.css';
import { Field, Form, Formik } from 'formik';

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
            filter: '',
          }}
        >
          <Form className={css.filter} onChange={handleChangeFilter}>
            <div role="group" className={css.radio}>
              <Field
                value="van"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="van"
              />
              <label htmlFor="van" className={css.radio_item}>
                {/* <div className={css.radio_btn}> */}
                <Icon className={css.filter_icon} id="alcove" />
                <p className={css.filter_item_title}>Van</p>
                {/* </div> */}
              </label>
              <Field
                value="fully-int"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="fully-int"
              />
              <label htmlFor="fully-int" className={css.radio_item}>
                {/* <div className={css.radio_btn}> */}
                <Icon className={css.filter_icon} id="fully-int" />
                <p className={css.filter_item_title}>Fully Integrated</p>
                {/* </div> */}
              </label>
              <Field
                value="alcove"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="alcove"
              />
              <label htmlFor="alcove" className={css.radio_item}>
                {/* <div className={css.radio_btn}> */}
                <Icon className={css.filter_icon} id="alcove" />
                <p className={css.filter_item_title}>Alcove</p>
                {/* </div> */}
              </label>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FilterType;
