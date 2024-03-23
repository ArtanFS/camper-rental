import Icon from 'components/Icon/Icon';
import css from './Label.module.css';

const Label = ({ className, classNameIcon, id, title }) => {
  return (
    <label htmlFor={id} className={className}>
      <Icon className={classNameIcon} id={id} />
      <p className={css.title}>{title}</p>
    </label>
  );
};

export default Label;
