import Icon from 'components/Icon/Icon';
import css from './FilterEquipment.module.css';

const FilterEquipment = () => {
  // const dispatch = useDispatch();

  // const currentFilter = useFilter();

  // const handleChangeFilter = e => {
  // dispatch(addFilter(e.target.value));
  // };

  return (
    <div className={css.filter_container}>
      <h2 className={css.title}>Filter equipment</h2>

      <div className={css.filter_wrapper}>
        {/* <Formik
          initialValues={{
            filter: currentFilter,
          }}
        > */}
        {/* <Form className={css.filter} onChange={handleChangeFilter}> */}
        <div role="checkbox" aria-checked className={css.checkbox}>
          <h3 className={css.filter_title}>Label color</h3>

          {/* <Field
            value="alcove"
            className={css.visually_hidden}
            type="checkbox"
            name="filter"
            id="alcove"
          /> */}
          <label htmlFor="alcove" className={css.radio_item}>
            {/* <div className={css.radio_btn}>Alcove</div> */}
            <Icon className={css.filter_icon} id="alcove" />
            <p>Alcove</p>
          </label>
          {/* <Field
            value="fully-int"
            className={css.visually_hidden}
            type="radio"
            name="filter"
            id="fully-int"
          /> */}
          <label htmlFor="fully-int" className={css.radio_item}>
            <Icon className={css.filter_icon} id="fully-int" />
            <p>Fully-int</p>
          </label>
          {/* <Field
            value="van"
            className={css.visually_hidden}
            type="radio"
            name="filter"
            id="van"
          /> */}
          <label htmlFor="van" className={css.radio_item}>
            <Icon className={css.filter_icon} id="van" />
            <p>Van</p>
          </label>
        </div>
        {/* </Form> */}
        {/* </Formik> */}
      </div>
    </div>
  );
};

export default FilterEquipment;
