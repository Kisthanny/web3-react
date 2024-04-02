import Review from "../components/Review";
import { reviews } from "../constants";
const CustomerReview = () => {
  return (
    <section className="max-container flex flex-col items-center gap-4">
      <h2 className="text-4xl font-palanquin font-bold text-center">
        What our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="info-text max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-col lg:flex-row max-lg:gap-14 items-center justify-around w-full">
        {reviews.map((e) => (
          <Review key={e.id} review={e} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
