// import axios from "axios";
// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import "./pages.css";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import Welcome from "../components/Welcome";
// import Filter from "../components/Filter";

// const Card = () => {
//   return;
//   <div>
//     {!!carData.length
//       ? carData.map((item) => (
//           <section id="carList">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div className="card h-100">
//                     <div className="card-body">
//                       <img
//                         src={item.image}
//                         width={310}
//                         height={190}
//                         style={{ marginBottom: "40px", marginTop: "40px", marginLeft: "40px" }}
//                       />
//                       <br />
//                       <h6 className="car-name">{item.name}</h6>
//                       <h5 className="car-price">
//                         <b>{item.price}/ hari</b>
//                       </h5>
//                       <h6 style={{ fontWeight: 600 }}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                         tempor incididunt ut labore et dolore magna aliqua.
//                       </h6>
//                       <Link to={`/detailmobil/${item.id}`}>
//                         <button
//                           type="button"
//                           className="btn-sewa"
//                           data-bs-toggle="modal"
//                           data-bs-target="#exampleModal"
//                           style={{ marginTop: "20px" }}
//                         >
//                           Pilih Mobil
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ))
//       : null}
//   </div>;
// };

// export default Card;
