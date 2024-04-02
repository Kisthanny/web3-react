const ServiceCard = ({ info }) => {
  const { imgURL, label, subtext } = info;
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16 rounded-[20px] shadow-3xl">
      <div className="w-11 h-11 rounded-full bg-coral-red flex items-center justify-center">
        <img width={24} height={24} src={imgURL} alt="card icon" />
      </div>
      <p className="font-bold font-palanquin text-3xl mt-4">{label}</p>
      <p className="info-text mt-2">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
