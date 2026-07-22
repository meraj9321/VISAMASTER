import React, { useState } from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import VisaModal from "../components/CountryCard/VisaModal";
import countries from "../data/countries";

function Services() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Visa Services</h2>

          <p className="text-muted">
            Select your destination country to view visa details.
          </p>
        </div>

        <div className="row">
          {countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <VisaModal country={selectedCountry} closeModal={closeModal} />
      </div>
    </section>
  );
}

export default Services;
