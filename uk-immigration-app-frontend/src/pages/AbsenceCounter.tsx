import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";

const AbsenceCounter = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          height: "90vh",
          width: "100vw",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "navy",
            paddingTop: "50px",
            marginTop: "0px",
          }}
        >
          Absence Counter
        </h2>

      </Box>
      <Footer />
    </div>
  );
};

export default AbsenceCounter;
