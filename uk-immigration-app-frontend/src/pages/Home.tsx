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
          justifyContent: "flex-start",
          p: 4,
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "navy",
            marginTop: "0px",
            paddingTop: "0px",
            marginBottom: "4px",
          }}
        >
          Welcome to the UK Immigration Absence Counter Application!
        </h1>
        <p
          style={{
            fontSize: "35px",
            textAlign: "center",
            color: "navy",
            fontWeight: "bolder",
            textShadow: "1px 1px 2px red",
          }}
        >
          Your comprehensive tool for understanding UK immigration rules and
          calculating absence days.
        </p>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            component={Link}
            to="/infoHub"
            size="large"
            sx={{ py: 2, px: 4 }}
          >
            InfoHub
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/absenceCounter"
            size="large"
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
