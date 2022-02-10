import React from "react";
import Announcement from '../components/Announcement'
import Products from "../components/Products";
import Footer from "../components/Footer";



const HomePage = () => {
  return (
    <div>
      <Announcement/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default HomePage;