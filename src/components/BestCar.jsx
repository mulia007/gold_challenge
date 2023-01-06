import * as React from "react";

const BestCar = () => {
  return (
    <section id="ourService" className="ourService">
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <img
              src="img/LAPTOP.png"
              style={{ alignItems: "center" }}
              className="img-fluid"
              width={374}
              height={562}
            />
          </div>
          <div className="col-lg-6 col-xs-12">
            <h1 className="display-6">
              Best Car Rental for any kind of trip in <br />
              (Lokasimu)
            </h1>
            <p className="lead">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
              dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk
              perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <p className="list">
              <img src="img/checklist.png" width={20} height={20} />
              &nbsp;&nbsp;Sewa mobil dengan supir di Jakarta 12 Jam
            </p>
            <p className="list">
              <img src="img/checklist.png" width={20} height={20} />
              &nbsp;&nbsp;Sewa mobil lepas kunci di Jakarta selama 24 Jam
            </p>
            <p className="list">
              <img src="img/checklist.png" width={20} height={20} />
              &nbsp;&nbsp;Sewa mobil jangka panjang bisa Bulanan
            </p>
            <p className="list">
              <img src="img/checklist.png" width={20} height={20} />
              &nbsp;&nbsp;Gratis Antar - Jemput Mobil langsung ke Bandara
            </p>
            <p className="list">
              <img src="img/checklist.png" width={20} height={20} />
              &nbsp;&nbsp;Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCar;
