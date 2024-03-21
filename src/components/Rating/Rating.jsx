import Icon from 'components/Icon/Icon';

const Rating = ({ className, classNameIcon, rating, reviews }) => {
  return (
    <div className={className}>
      <Icon className={classNameIcon} id="star" />
      <p>{rating + '(' + reviews + ' Reviews)'}</p>
    </div>
  );
};

export default Rating;
