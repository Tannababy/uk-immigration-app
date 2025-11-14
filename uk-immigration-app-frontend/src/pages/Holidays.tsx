import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

const Holidays = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Header />

        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            color: "black",
            textShadow: "2px 2px 2px navy",
          }}
        >
          UK Public & Bank Holidays
        </h2>
        <Footer />
      </Box>
    </div>
  );
};

export default Holidays;
