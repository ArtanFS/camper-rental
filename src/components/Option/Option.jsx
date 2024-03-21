import Icon from 'components/Icon/Icon';

const Option = ({ className, classNameIcon, id, children }) => {
  return (
    <div className={className}>
      <Icon className={classNameIcon} id={id} />
      {children}
    </div>
  );
};

export default Option;
