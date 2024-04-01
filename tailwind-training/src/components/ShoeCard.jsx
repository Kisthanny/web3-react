const ShoeCard = ({ shoe, active, onCardClick }) => {
  return (
    <div
      className={`${
        active ? "border-coral-red" : "border-transparent"
      } border-2  rounded-xl cursor-pointer`}
      onClick={onCardClick.bind(null, shoe.id)}
    >
      <div className="bg-card bg-cover bg-center w-40 h-40 rounded-xl flex items-center justify-center">
        <img src={shoe.thumbnail} alt="shoe thumbnail" width={127} />
      </div>
    </div>
  );
};

export default ShoeCard;
