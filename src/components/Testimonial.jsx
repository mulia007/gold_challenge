import * as React from "react";

const Testimonial = () => {
  return (
    <section id="testimony">
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row text-center">
          <div className="col">
            <h2 className="fs-2">Testimonial</h2>
            <p className="fs-6">Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide justify-content-center" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card text-start" style={{ width: "30rem", borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                  <div className="card-body">
                    <img src="img/Rate.png" alt="" />
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem corporis distinctio voluptates voluptatum officia. Facere quam quaerat ex accusamus, repellat velit neque dolorem quidem delectus
                      alias eos odio. Dicta!
                    </p>
                    <p>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card text-start" style={{ width: "30rem", borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                  <div className="card-body">
                    <img src="img/Rate.png" alt="" />
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur quo dolorem eos esse perferendis beatae, amet magnam fuga, impedit, error rem! Sequi dolorum veritatis, placeat tenetur numquam alias sint!
                    </p>
                    <p>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card text-start" style={{ width: "30rem", borderColor: "transparent", backgroundColor: "#F1F3FF" }}>
                  <div className="card-body">
                    <img src="img/Rate.png" alt="" />
                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sint ad dolores, non et odio maiores id ducimus possimus animi ipsum recusandae numquam officia doloremque adipisci necessitatibus dicta veniam
                      consequuntur!
                    </p>
                    <p>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </section>
  );
};

export default Testimonial;
