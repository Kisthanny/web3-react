import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="max-container flex items-center justify-between gap-10 flex-col xl:flex-row-reverse">
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 mb-4">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex items-center justify-center gap-4 mt-7">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" grey />
        </div>
      </div>
      <div className="flex-1">
        <img src={offer} alt="special offer" />
      </div>
    </section>
  );
};

export default SpecialOffer;
