import Icon from 'components/Icon/Icon';

const Location = ({ className, classNameIcon, location }) => {
  return (
    <div className={className}>
      <Icon className={classNameIcon} id="locate" />
      <p>{location}</p>
    </div>
  );
};

export default Location;
