import * as React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <section className="jumbotron">
        <div className="container container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="display-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="lead">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
                harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {props.isButtonShow ? (
                <div>
                  <button type="button" className="btn btn-success">
                    <Link to="/carimobil" style={{ textDecoration: "none", color: "#fff" }}>
                      Mulai Sewa Mobil
                    </Link>
                  </button>
                </div>
              ) : null}
            </div>
            <div className="col p-0 m-0 text-end">
              <img src="img/CAR.png" alt="car" className="w-100 img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
