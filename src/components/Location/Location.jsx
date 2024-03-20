import Icon from 'components/Icon/Icon';

const Location = ({ location }) => {
  return (
    <>
      <Icon className="" id="locate" />
      <p>{location}</p>
    </>
  );
};

export default Location;
