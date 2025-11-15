
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import backgroundImage from "../TravelPhoto.jpg";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <Box>
      <Header />
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          color: "navy",
          textShadow: "2px 2px 2px navy",
          marginTop: "50px",
          paddingTop: "0px",
          marginBottom: "4px",
        }}
      >
        Welcome to the UK Immigration Absence Counter Application!
      </h1>
      <p
        style={{
          marginBottom: "150px",
          fontSize: "35px",
          textAlign: "center",
          color: "navy",
          fontWeight: "bolder",
          textShadow: "2px 2px 2px navy",
        }}
      >
        Your comprehensive tool for understanding UK immigration rules and
        calculating absence days.
      </p>
      <Grid container>
        <Grid size={6}>
          <InfoCard
            title="Info Hub"
            description="Explore various UK immigration routes and their general guidelines."
            image={backgroundImage}
            link="/infoHub"
            buttonText="Info Hub"
          />
        </Grid>
        <Grid size={6}>
          <InfoCard
            title="UK Public/Bank Holiday Dates"
            description="Stay up-to-date with UK holdays and calculate processing times that exclude holidays."
            image={backgroundImage}
            link="/holidays"
            buttonText="Holiday Dates"
          />
        </Grid>
        <Grid size={6}>
          <InfoCard
            title="Absence counter"
            description="Explore various UK immigration routes and their general guidelines."
            image={backgroundImage}
            link="/absenceCounter"
            buttonText="Absence counter"
          />
        </Grid>
        <Grid size={6}>
          <InfoCard
            title="Immigration Fees"
            description="Explore various UK immigration fees."
            image={backgroundImage}
            link="/fees"
            buttonText="Fees"
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;
