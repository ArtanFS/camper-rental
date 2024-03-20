import Icon from 'components/Icon/Icon';

const Rating = ({ rating, reviews }) => {
  return (
    <>
      <Icon className="" id="star" />
      <p>{rating + '(' + reviews + ' Reviews)'}</p>
    </>
  );
};

export default Rating;
