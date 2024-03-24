import { Field, Form, Formik } from 'formik';
// import Icon from 'components/Icon/Icon';
import css from './FilterEquipment.module.css';
import Label from 'components/Label/Label';
import classNames from 'classnames';

const FilterEquipment = () => {
  // const dispatch = useDispatch();

  // const currentFilter = useFilter();

  const handleChangeFilter = e => {
    // dispatch(addFilter(e.target.value));
  };

  return (
    <div className={css.filter_container}>
      <h2 className={css.title}>Filter equipment</h2>

      <div className={css.filter_wrapper}>
        <Formik
          initialValues={{
            options: [],
          }}
        >
          <Form className={css.filter} onChange={handleChangeFilter}>
            <div role="checkbox" aria-checked className={css.checkbox}>
              <Field
                value="AC"
                className={css.visually_hidden}
                type="checkbox"
                name="options"
                id="AC"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="AC"
                title="AC"
              />
              <Field
                value="transmission"
                className={css.visually_hidden}
                type="checkbox"
                name="options"
                id="transmission"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="transmission"
                title="Automatic"
              />
              <Field
                value="kitchen"
                className={css.visually_hidden}
                type="checkbox"
                name="options"
                id="kitchen"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="kitchen"
                title="Kitchen"
              />
              <Field
                value="TV"
                className={css.visually_hidden}
                type="checkbox"
                name="options"
                id="TV"
              />
              <Label
                className={classNames(css.filter_item, css.filter_item_add)}
                classNameIcon={css.filter_icon}
                id="TV"
                title="TV"
              />
              <Field
                value="shower"
                className={css.visually_hidden}
                type="checkbox"
                name="options"
                id="shower"
              />
              <Label
                className={css.filter_item}
                classNameIcon={css.filter_icon}
                id="shower"
                title="Shower/WC"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FilterEquipment;
