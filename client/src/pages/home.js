import React from "react";
import Header from "../components/header";
import Jumbotron from "../components/jumbotron.js";
import About from "../components/about";
import Products from "../components/products";
import Contact from "../components/contact";
import Footer from "../components/footer";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
