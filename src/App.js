import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import LineStepper from "./component/LineStepper";
import Navbar from "./component/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
