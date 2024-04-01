import Rating from "./Rating";
const Product = ({ product }) => {
  const { imgURL, name, price, rating } = product;
  return (
    <div>
      <img src={imgURL} alt="product" className="w-[282px] h-[282px] object-contain" />
      <Rating rate={rating} />
      <p className="font-semibold font-palanquin text-2xl mt-3">{name}</p>
      <p className="font-semibold font-montserrat text-coral-red text-2xl mt-3">{price}</p>
    </div>
  );
};

export default Product;
