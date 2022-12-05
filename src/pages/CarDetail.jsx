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
      <section class="detail">
        <div class="container py-lg-5">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h6>Tentang Paket</h6>
                  <h6>Include</h6>
                  <ul class="text-muted">
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>

                  <h6>Exclude</h6>
                  <ul class="text-muted">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>

                  <h6>Exclude</h6>
                  <ul class="text-muted">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-body">
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
                      <p>
                        <img src="../assets/users.png" />
                        {car.category === "Medium" && "4 - 6 Orang"}
                        {car.category === "small" && "2 - 4 Orang"}
                        {car.category === "medium" && "4 - 6 Orang"}
                        {car.category === "large" && "6 - 8 Orang"}
                      </p>
                    </div>
                  ) : (
                    <h1></h1>
                  )}
                </div>
                <div class="">
                  <h6>{car.name}</h6>
                  <i class=""></i>
                </div>
                <div class="row">
                  <div class="col px-lg-5 py-lg-5">
                    <h6 class="fw-bold">Total</h6>
                  </div>
                  <div class="col pe-5 py-lg-5 text-lg-end">
                    <h6 class="fw-bold">Rp. {car.price}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />;
    </div>
  );
};

export default CarDetail;
