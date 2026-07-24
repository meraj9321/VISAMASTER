import { useState } from "react";
import "./PopularCountries.css";
import countries from "../../data/countries";
import VisaModal from "../../components/CountryCard/VisaModal"; // change the path if needed

function PopularCountries() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <>
      <section className="popular-countries py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Popular Visa Destinations</h2>
            <p className="text-muted">
              Choose your destination and explore visa information.
            </p>
          </div>

          <div className="row g-4">
            {countries.map((country) => (
              <div className="col-lg-4 col-md-6" key={country.id}>
                <div className="country-card">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="country-image"
                  />

                  <div className="country-body">
                    <h4>{country.name}</h4>

                    <span className="badge bg-primary mb-3">
                      {country.visaType}
                    </span>

                    <div className="info">
                      <span>⏱ {country.processingTime}</span>
                    </div>

                    <div className="info">
                      <span>📅 {country.validity}</span>
                    </div>

                    <div className="info">
                      <span>💰 {country.fees}</span>
                    </div>

                    <button
                      className="btn btn-primary w-100 mt-3"
                      onClick={() => setSelectedCountry(country)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisaModal
        country={selectedCountry}
        closeModal={() => setSelectedCountry(null)}
      />
    </>
  );
}

export default PopularCountries;
