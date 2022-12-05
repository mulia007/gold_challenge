import * as React from "react";
import FB from "../assets/img/FB.PNG";
import IG from "../assets/img/IG.PNG";
import TW from "../assets/img/TW.PNG";
import ML from "../assets/img/MAIL.PNG";
import TC from "../assets/img/TC.PNG";
import LG from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-lg-3">
            <p className="footer" style={{ fontWeight: 700 }}>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000 <br />
              <br />
              binarcarrental@gmail.com <br />
              <br />
              081-233-334-808
            </p>
          </div>
          <div className="col-lg-3">
            <p className="footer">
              Our Services <br />
              <br />
              Why Us <br />
              <br />
              Testimonial <br />
              <br />
              FAQ
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Connect with us <br />
              <br />
              <img src={FB} width={30} height={30} style={{ marginBottom: "20px" }} />
              <img
                src={IG}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src={TW}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src={ML}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
              <img
                src={TC}
                width={30}
                height={30}
                style={{ marginBottom: "20px", marginLeft: "12px" }}
              />
            </p>
          </div>
          <div className="col-lg-3" style={{ fontWeight: 700 }}>
            <p className="footer">
              Copyright Binar 2022 <br />
              <br />
              <img src={LG} alt="" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
