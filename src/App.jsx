import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./cooking/Data";
import CarInfo from "./cooking/Car_info";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}

        <div className="flex-1 ml-64 md:ml-0">
          <Routes>
            <Route path="/" element={<h1>Hello World</h1>} />
            <Route path="/data" element={<Data />} />
            <Route path="/car_information" element={<CarInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
