import React from "react";
import Announcement from '../components/Announcement'
import Products from "../components/Products";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default HomePage;