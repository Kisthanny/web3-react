import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((e, index) => {
        return <ServiceCard info={e} key={`service-card-${index}`} />;
      })}
    </section>
  );
};

export default Services;
