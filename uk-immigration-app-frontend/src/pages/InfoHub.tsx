import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import backgroundImage from "../TravelPhoto.jpg";
import InfoCard from "../components/InfoCard";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { ImmigrationRoutes } from "../types/ImmigrationRoutes";
import { useImmigrationRoutes } from "../utils/CallingFunctions";

const InfoHub = () => {
  const { infoCardsData, isLoading } = useImmigrationRoutes();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
        <p style={{ marginLeft: "2" }}>Loading immigration information...</p>
      </Box>
    );
  }

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
          {infoCardsData.length > 0 ? (
            infoCardsData.map((infoItem) => (
              <InfoCard
                id={infoItem.id}
                title={infoItem.title}
                description={infoItem.description}
                learnMoreLink={infoItem.learnMoreLink}
              />
            ))
          ) : (
            <p>No information cards available</p>
          )}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default InfoHub;
