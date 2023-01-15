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
                      Mulai Sewa Mobil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis, aliquid. Autem laborum quaerat ex accusamus iure quod dolorum adipisci
                      unde!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde porro
                      corrupti voluptas quibusdam similique iure a? Voluptatibus quidem accusantium
                      iste expedita minus dolorum, provident eligendi ipsam labore accusamus at
                      aliquam modi praesentium atque rem quas adipisci possimus quam id esse facilis
                      obcaecati velit! Error blanditiis obcaecati commodi aliquid laboriosam a minus
                      incidunt sint consequuntur qui, asperiores, amet neque, optio minima excepturi
                      officiis. Nam dolores ex quas magnam laboriosam aliquid quod dolor error
                      suscipit? Magni vitae libero illo adipisci quaerat, tempora vel ullam
                      repudiandae commodi cumque est, itaque quas laboriosam! Explicabo quidem
                      commodi officia iure voluptates delectus hic iusto cumque debitis animi, rem
                      voluptatem exercitationem aspernatur consequuntur ipsa laboriosam unde non
                      molestiae, optio incidunt atque temporibus perferendis. Similique sint natus
                      expedita.
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
