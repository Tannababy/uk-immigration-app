import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import backgroundImage from "../TravelPhoto.jpg";
import InfoCard from "../components/InfoCard";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "navy",
          }}
        >
          Welcome to the UK Immigration Application!
        </h1>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            component={Link}
            to="/infoHub"
            sx={{ py: 2, px: 4 }}
          >
            InfoHub
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/absenceCounter"
            sx={{ py: 2, px: 4 }}
          >
            Absence Counter
          </Button>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
