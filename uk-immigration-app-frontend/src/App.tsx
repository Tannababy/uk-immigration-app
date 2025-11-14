import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import InfoHub from "./pages/InfoHub";
import Holidays from "./pages/Holidays";
import AbsenceCounter from "./pages/AbsenceCounter";
import Fees from "./pages/Fees";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infoHub" element={<InfoHub />} />
        <Route path="/absenceCounter" element={<AbsenceCounter />} />
        <Route path="/holidays" element={<Holidays/>} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
