import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Fees = () => {
  return (
    <div>
      <Header />
      <h2
        style={{
          fontSize: "50px",
          textAlign: "center",
          color: "black",
          textShadow: "2px 2px 2px navy",
        }}
      >
        Immigration Fees
      </h2>
      <Footer />
    </div>
  );
};

export default Fees;
