import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import backgroundImage from "../TravelPhoto.jpg";
import InfoCard from "../components/InfoCard";
import { useState } from "react";
import { fetchAllImmigrationRoutesMock } from "../utils/APICalls";
import { ImmigrationRoutes } from "../types/ImmigrationRoutes";

const InfoHub = () => {
  const [infoCardsData, setInfoCardsData] = useState<[]>([]); // To store the fetched data
  const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    
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
        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "navy",
          }}
        >
          InfoHub
        </h2>
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            color: "navy",
            fontWeight: "bolder",
            textShadow: "1px 1px 2px red",
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
        >
          <InfoCard />
          <InfoCard />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default InfoHub;
