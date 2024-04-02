import Rating from "./Rating";
const Review = ({ review }) => {
  const { imgURL, customerName, rating, feedback } = review;
  return (
    <div className="flex flex-col items-center w-96">
      <img
        className="w-[120px] h-120px rounded-full"
        src={imgURL}
        alt={customerName}
      />
      <p className="info-text mt-6 pb mb-2 text-center">{feedback}</p>
      <Rating rate={rating} />
      <p className="font-bold font-palanquin text-3xl">{customerName}</p>
    </div>
  );
};

export default Review;
