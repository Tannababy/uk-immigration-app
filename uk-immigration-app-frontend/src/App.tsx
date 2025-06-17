import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InfoHub from "./pages/InfoHub";
import AbsenceCounter from "./pages/AbsenceCounter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infoHub" element={<InfoHub />} />
        <Route path="/absenceCounter" element={<AbsenceCounter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
