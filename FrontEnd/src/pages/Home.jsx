import { useState } from "react";

import Navbar from "../components/navbar/Nav";
import SearchSection from "../components/SearchSection/SearchSection";
import NewsSection from "../components/NewsCard/NewsSection";
import B2bSection from "../components/B2B_Section/B2bSection";
import Footer from "../components/Footer/Footer";

import Services from "./Services";

import VisaModal from "../components/CountryCard/VisaModal";
import countries from "../data/countries";

function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    console.log("Selected:", country);
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="container">
      <Navbar />

      <SearchSection countries={countries} onSelect={handleSelect} />

      <NewsSection />

      <B2bSection />

      <Services onSelect={handleSelect} />

      <VisaModal country={selectedCountry} closeModal={closeModal} />

      <Footer />
    </div>
  );
}

export default Home;
