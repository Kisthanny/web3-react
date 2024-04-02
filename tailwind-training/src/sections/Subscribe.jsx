import Button from "../components/Button";
const Subscribe = () => {
  const placeholder = "subscribe@nike.com";
  return (
    <section className="max-container flex items-center flex-col lg:flex-row justify-between max-lg:gap-11">
      <div className="flex-1">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-md">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h2>
      </div>

      <div className="flex-1 w-full">
        <div className="flex items-center sm:border rounded-full p-2 border-slate-gray lg:ml-20 max-sm:flex-col max-sm:gap-5" >
          <input className="input" type="text" placeholder={placeholder} />
          <div className="w-full sm:w-32">
            <Button label="Sign up" fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
