import React from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import backgroundImage from "./TravelPhoto.jpg";

const AbsenceCounter = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "90vh",
          width: "100vw",
        }}
      />
      <Footer />
    </div>
  );
};

export default AbsenceCounter;
