import React from "react";
import Hero from "../Components/Hero/Hero";
import TrustBar from "../Components/TrustBar/TrustBar";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLatter from "../Components/NewsLetter/NewsLatter";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <main className="shop_homepage">
      <Hero />
      <TrustBar />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLatter />
      <Footer />
    </main>
  );
};

export default Shop;