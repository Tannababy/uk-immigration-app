import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import backgroundImage from "../TravelPhoto.jpg";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "navy",
            paddingTop: "50px",
            marginTop: "0px",
          }}
        >
          Welcome to the UK Immigration Application!
        </h1>
        <InfoCard />
        <InfoCard />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
