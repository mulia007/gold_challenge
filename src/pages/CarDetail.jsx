import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./pages.css";
import Filter from "../components/Filter";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>ini CarDetail</h1>
      <Filter disabled={true} isButton={false} />
      {Object.entries(car).length ? (
        <div>
          <img src={car.image} />
          <h1>{car.name}</h1>
          <p>{car.price}</p>
          <p>
            {car.category === "Medium" && "4 - 6 Orang"}
            {car.category === "small" && "2 - 4 Orang"}
            {car.category === "medium" && "4 - 6 Orang"}
            {car.category === "large" && "6 - 8 Orang"}
          </p>
        </div>
      ) : (
        <h1></h1>
      )}
      <Footer />
    </div>
  );
};

export default CarDetail;
