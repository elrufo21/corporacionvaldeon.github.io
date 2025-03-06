import Banner from "../components/Banner";
import ServicesTabs from "../components/ServicesTabs";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center  px-6 py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8">
        <Banner />
      </div>
      <div className="max-w-7xl mt-10 h-full w-full flex flex-col md:flex-row items-center gap-8">
        <Slider />
      </div>
      <div className="max-w-7xl mt-10 h-full w-full flex flex-col md:flex-row items-center gap-8">
        <ServicesTabs />
      </div>
    </div>
  );
};

export default Home;
