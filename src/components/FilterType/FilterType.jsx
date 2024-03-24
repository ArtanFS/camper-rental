import css from './FilterType.module.css';
import { Field } from 'formik';
import Label from 'components/Label/Label';

const FilterType = ({ setType }) => {
  return (
    <div className={css.filter_wrapper}>
      <div role="group" className={css.radio} onChange={setType}>
        <Field
          value="panelTruck"
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
    </div>
  );
};

export default FilterType;
