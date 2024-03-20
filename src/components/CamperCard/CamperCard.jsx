import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Location from 'components/Location/Location';
import Option from 'components/Option/Option';
import Price from 'components/Price/Price';
import Rating from 'components/Rating/Rating';

const CamperCard = ({ data }) => {
  //   console.log(data.reviews.length);
  return (
    <li>
      <div>
        <div>
          <img src={data.gallery[0]} alt="" width={290} height={310} />
        </div>
        <div>
          <div>
            <h2>{data.name}</h2>
            <div>
              <Price price={data.price} />
              <Button>
                <Icon className="" id="heart" />
              </Button>
            </div>
          </div>
          <div>
            <Rating rating={data.rating} reviews={data.reviews.length} />
            <Location location={data.location} />
          </div>
          <p>{data.description}</p>
          <div>
            <Option id="adults">{data.adults + ' adults'}</Option>
            <Option id="transmission">{data.transmission}</Option>
            <Option id="fuel">{data.engine}</Option>
            {data.details.kitchen && <Option id="kitchen">Kitchen</Option>}
            <Option id="bed">{data.details.beds + ' beds'}</Option>
            {data.details.airConditioner && <Option id="AC">AC</Option>}
          </div>
          <Button>Show more</Button>
        </div>
      </div>
    </li>
  );
};

export default CamperCard;
