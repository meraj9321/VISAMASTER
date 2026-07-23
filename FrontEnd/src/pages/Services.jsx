import React from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import countries from "../data/countries";
import VisaModal from "../components/CountryCard/VisaModal";
import { useState } from "react";

function Services({ onSelect }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <section className="py-5 bg-light container" id="services">
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
              onSelect={setSelectedCountry}
            />
          ))}
        </div>
      </div>
      {selectedCountry && (
        <VisaModal
          country={selectedCountry}
          closeModal={() => setSelectedCountry(null)}
        />
      )}
    </section>
  );
}

export default Services;
