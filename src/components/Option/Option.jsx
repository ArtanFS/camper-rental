import Icon from 'components/Icon/Icon';

const Option = ({ id, children }) => {
  return (
    <div>
      <Icon className="" id={id} />
      {children}
    </div>
  );
};

export default Option;
