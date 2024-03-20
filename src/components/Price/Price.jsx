const Price = ({ price }) => {
  return <p>{'\u20AC' + price + '0.00'}</p>;
};

export default Price;
