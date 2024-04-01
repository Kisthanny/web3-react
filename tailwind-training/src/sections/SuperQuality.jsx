import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center gap-10 max-container">
      <div className="flex flex-1 flex-col lg:max-w-lg">
        <h2 className="text-4xl font-palanquin font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-6 text-slate-gray text-lg font-montserrat info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <span className="inline-block mt-4">
            Our dedication to detail and excellence ensures your satisfaction
          </span>
        </p>
        <div className="mt-4">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={shoe8} alt="" className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
