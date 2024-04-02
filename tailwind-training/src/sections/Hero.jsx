import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import { useState } from "react";
import { useEffect } from "react";
const Hero = () => {
  const [selectedShoeId, setSelectedShoeId] = useState(0);
  const [bigShoeUrl, setBigShoeUrl] = useState("");
  const handleClickShoe = (id) => {
    setSelectedShoeId(id);
    setBigShoeUrl(shoes.find((e) => e.id === id).bigShoe);
  };
  useEffect(() => {
    handleClickShoe(shoes[0].id);
  }, []);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col items-start justify-center gap-10 max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collections
        </p>
        <h1 className="text-[72px] sm:text-8xl max-sm:leading-[82px] font-palanquin font-bold leading-[126px]">
          <span className="relative text-nowrap z-10 bg-white pr-8">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-relaxed sm:max-w-sm mb-4">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconUrl={arrowRight}></Button>
        <ul className="flex flex-wrap items-start gap-16 mt-11">
          {statistics.map((item) => (
            <li className="flex flex-col items-start" key={item.label}>
              <span className="text-4xl font-palanquin font-bold">
                {item.value}
              </span>
              <span className="font-montserrat text-slate-gray">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative bg-hero flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
        <img
          className="object-contain"
          src={bigShoeUrl}
          alt="shoe collection"
          width={610}
          height={502}
        />
        <div className="flex justify-center gap-8 absolute -bottom-10 max-xl:left-[10%] max-xl:gap-6">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              shoe={shoe}
              active={selectedShoeId === shoe.id}
              onCardClick={handleClickShoe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
