import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import BestCar from "../components/BestCar";
import WhyUs from "../components/WhyUs";
import Newtestimonial from "../components/Newtestimonial";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Welcome isButtonShow={true} />
      <BestCar />
      <WhyUs />
      <Newtestimonial />
      <Banner />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
