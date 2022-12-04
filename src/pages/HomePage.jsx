import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import BestCar from "../components/BestCar";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Filter from "../components/Filter";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Welcome isButtonShow={true} />
      <BestCar />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
      <Footer />
      <Filter />
    </div>
  );
};

export default HomePage;
