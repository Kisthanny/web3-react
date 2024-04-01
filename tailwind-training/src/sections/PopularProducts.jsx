import Product from "../components/Product";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="max-container">
      <h2 className="text-4xl font-palanquin font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="mt-6 text-slate-gray font-montserrat lg:max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default PopularProducts;
