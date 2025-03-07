import Banner from "../components/Banner";
import PricingCards from "../components/PricingCards";
import ServicesTabs from "../components/ServicesTabs";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner Section */}
      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Banner />
        </div>
      </section>

      {/* Slider Section */}
      <section className="w-full py-12  backdrop-filter backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <Slider />
        </div>
      </section>

      {/* Services Section - Usar el componente directamente */}
      <ServicesTabs />

      {/* Pricing Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <PricingCards />
        </div>
      </section>
    </div>
  );
};

export default Home;
