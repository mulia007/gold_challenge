import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";
import { Link } from "react-router-dom";

const SearchCar = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => {
        console.log(res);
        setCarData(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log("cardata", carData);

  return (
    <div>
      <Navbar />
      <div className="card-wrapper">
        {!!carData.length
          ? carData.map((item) => (
              <div className="car-card">
                <div className="img-container">
                  <img src={item.image} />
                </div>
                <p>{item.name}</p>
                <h2>{item.price}/ hari</h2>
                <p>Lorem ipsum</p>
                <Link to={`/detailmobil/${item.id}`}>
                  <button>pilih mobil</button>
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchCar;
