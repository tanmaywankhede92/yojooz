import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/homePage/Hero";
import View from "../components/homePage/view";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <View />
      <Footer />
    </>
  );
}

export default HomePage;
