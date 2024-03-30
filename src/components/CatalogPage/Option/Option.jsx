import { Icon } from 'components/UI';
import css from './Option.module.css';

const Option = ({ className, classNameIcon, id, children }) => {
  return (
    <div className={css.option}>
      <Icon className={css.option_icon} id={id} />
      {children}
    </div>
  );
};

export default Option;
