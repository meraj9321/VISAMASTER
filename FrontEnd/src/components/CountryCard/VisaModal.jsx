import React from "react";

function VisaModal({ country, closeModal }) {
  if (!country) return null;
  const whatsappNumber = "919321325098";
  const message = `Hello VisaMaster,

I would like to apply for a ${country.name} ${country.visaType}.

Please share the complete process, required documents, fees, and processing time.

Thank you.`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div
        className="modal fade show"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{country.name}</h3>

              <button className="btn-close" onClick={closeModal}></button>
            </div>

            <div className="modal-body">
              <img
                src={country.flag}
                alt={country.name}
                width="120"
                className="mb-4"
              />

              <h5>Visa Type</h5>
              <p>{country.visaType}</p>

              <h5>Processing Time</h5>
              <p>{country.processingTime}</p>

              <h5>Validity</h5>
              <p>{country.validity}</p>

              <h5>Visa Fees</h5>
              <p>{country.fees}</p>

              <h5>Documents Required</h5>

              <ul>
                {country.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Apply_now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default VisaModal;
