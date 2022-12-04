import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import BestCar from "../components/BestCar";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <BestCar />
      <WhyUs />
      <Testimonial />
      <Carousel />
      <Banner />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
