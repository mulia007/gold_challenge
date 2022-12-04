import "./App.css";
import HomePage from "./pages/HomePage";
import CarDetail from "./pages/CarDetail";
import SearchCar from "./pages/SearchCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carimobil" element={<SearchCar />} />
        <Route path="/detailmobil/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
