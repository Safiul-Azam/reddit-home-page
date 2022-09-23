import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ShowSingleProduct from "./component/Home/ShowSingleProduct";
import LineStepper from "./component/MultiStepper/LineStepper";
import Navbar from "./component/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ShowSingleProduct />} />
        <Route path="/checkout" element={<LineStepper />} />
        <Route path="*" element={<div className="text-center text-5xl text-red-500">
          This Page is Not Found
        </div>} />
      </Routes>
    </div>
  );
}

export default App;
