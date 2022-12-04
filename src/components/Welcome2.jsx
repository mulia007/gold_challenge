import * as React from "react";
import { Link } from "react-router-dom";

const Welcome2 = () => {
  return (
    <div>
      <section class="jumbotron">
        <div class="container">
          <div class="row align-items-center flex-column flex-md-row">
            <div class="col">
              <h1 class="display-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p class="lead">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
                harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>
            <div class="col p-0 text-end">
              <img src="img/CAR.png" alt="car" class="w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome2;
