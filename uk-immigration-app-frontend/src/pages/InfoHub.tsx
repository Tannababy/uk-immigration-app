import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import backgroundImage from "../TravelPhoto.jpg";
import InfoCard from "../components/InfoCard";

const InfoHub = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "black",
            textShadow: "2px 2px 2px navy",
          }}
        >
          InfoHub
        </h2>
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            color: "black",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px navy",
          }}
        >
          Explore various UK immigration routes and their general guidelines.
          For detailed rules and specific advice, always consult official GOV.UK
          resources.
        </p>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        ></Box>
      </Box>
      <Footer />
    </div>
  );
};

export default InfoHub;
