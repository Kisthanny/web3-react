const Button = ({ label, iconUrl }) => {
  return (
    <button className="rounded-full flex items-center justify-center gap-4 px-7 py-4 bg-coral-red hover:bg-red-500 mt-4">
      <span className="text-white text-lg font-montserrat leading-none">
        {label}
      </span>
      {iconUrl && <img className="rounded-full w-5 h-5" src={iconUrl} alt="" />}
    </button>
  );
};

export default Button;
