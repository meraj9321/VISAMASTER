import React from "react";

function CountryCard({ country, onSelect }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" id="CountryCard">
      <div
        className="card h-100 shadow-sm border-0"
        style={{ cursor: "pointer" }}
        onClick={() => onSelect(country)}
      >
        <img
          src={country.flag}
          className="card-img-top"
          alt={country.shortName}
          style={{ height: "170px", objectFit: "cover" }}
        />

        <div className="card-body text-center">
          <h5>{country.shortName}</h5>

          <p className="text-muted mb-1">{country.visaType}</p>

          <button className="btn btn-primary w-100">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
