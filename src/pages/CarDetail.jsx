import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./pages.css";
import Filter from "../components/Filter";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Filter disabled={true} isButton={false} />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="col-lg-6">
          <Col lg={7}>
            <Card className="p-5 mb-6">
              {Object.entries(car).length ? (
                <div>
                  <img
                    src={car.image}
                    width={270}
                    height={160}
                    top={396}
                    left={904}
                    style={{
                      marginBottom: "40px",
                      marginTop: "40px",
                      marginLeft: "40px",
                      alignItems: "center",
                    }}
                  />
                  <h1>{car.name}</h1>

                  <p>
                    <img src="../assets/users.png" />
                    {car.category === "Medium" && "4 - 6 Orang"}
                    {car.category === "small" && "2 - 4 Orang"}
                    {car.category === "medium" && "4 - 6 Orang"}
                    {car.category === "large" && "6 - 8 Orang"}
                  </p>
                  <p>Total : Rp. {car.price}</p>
                </div>
              ) : (
                <h1></h1>
              )}
            </Card>
          </Col>
        </div>
        <div className="row">
          <div>
            <Col lg={7}>
              <Card className="p-5 mb-6">
                <h1 className="mb-5 fw-bold">Tentang Paket</h1>
                <h2 className="fw-bold">Include</h2>
                <ul>
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h2 className="fw-bold">Exclude</h2>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h2 className="fw-bold">Refund, Reschedule, Overtime</h2>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card>
            </Col>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
