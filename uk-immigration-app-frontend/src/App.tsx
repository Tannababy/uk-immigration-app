import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from "@mui/material/Box";
import backgroundImage from './UK-immigration-background.jpg'


const App = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100vh",
          width: "100vw",
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
