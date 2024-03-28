const Price = ({ className, price }) => {
  return <p className={className}>{'\u20AC' + price + '.00'}</p>;
};

export default Price;
