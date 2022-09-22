import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import LineStepper from "./component/LineStepper";

function App() {
  return (
    <div>
      <Home />
      <LineStepper />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
