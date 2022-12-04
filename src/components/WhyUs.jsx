import * as React from "react";

const WhyUs = () => {
  return (
    <section id="whyUs">
      <div className="container">
        <h1 className="fs-2">Why Us</h1>
        <p className="fs-6">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/thumb.png" width={30} height={30} />
                <h5 className="card-title">Mobil Lengkap</h5>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/tag.png" width={30} height={30} />
                <h5 className="card-title">Harga Murah</h5>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/clock.png" width={30} height={30} />
                <h5 className="card-title">Layanan 24 Jam</h5>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. kami juga tersedia di hari minggu
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <img src="img/medal.png" width={30} height={30} />
                <h5 className="card-title">Sopir Profesional</h5>
                Sopir yang Profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
