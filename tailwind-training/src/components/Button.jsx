const Button = ({ label, iconUrl, grey }) => {
  console.log({ label, grey });
  return (
    <button
      className={`${
        grey
          ? "bg-white border-slate-gray border "
          : "bg-coral-red hover:bg-red-500 "
      }rounded-full flex items-center justify-center gap-4 px-7 py-4 mt-4`}
    >
      <span
        className={`${
          grey ? "text-slate-gray " : "text-white "
        }text-lg font-montserrat leading-none text-nowrap`}
      >
        {label}
      </span>
      {iconUrl && <img className="rounded-full w-5 h-5" src={iconUrl} alt="" />}
    </button>
  );
};

export default Button;
