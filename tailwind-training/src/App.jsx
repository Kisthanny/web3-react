import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReview,
  Subscribe,
  Footer,
} from "./sections/index";
export default function App() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding" id="products">
        <PopularProducts />
      </section>
      <section className="padding" id="about-us">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full" id="contact-us">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x  padding-t padding-b">
        <Footer />
      </section>
    </main>
  );
}
