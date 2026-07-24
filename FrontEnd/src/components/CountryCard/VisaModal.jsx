import React from "react";
import "./VisaModal.css";

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
              <div className="d-flex align-items-center gap-3">
                <img
                  src={country.flag}
                  alt={country.name}
                  width="70"
                  className="rounded shadow-sm"
                />

                <div>
                  <h3 className="mb-1">{country.name}</h3>
                  <span className="badge bg-primary">{country.visaType}</span>
                </div>
              </div>

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

              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="card text-center shadow-sm border-0">
                    <div className="card-body">
                      <h6>Processing</h6>
                      <strong>{country.processingTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-center shadow-sm border-0">
                    <div className="card-body">
                      <h6>Validity</h6>
                      <strong>{country.validity}</strong>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-center shadow-sm border-0">
                    <div className="card-body">
                      <h6>Fees</h6>
                      <strong>{country.fees}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <h5>Validity</h5>
              <p>{country.validity}</p>

              <h5>Visa Fees</h5>
              <p>{country.fees}</p>

              <h5>Documents Required</h5>

              <ul>
                {country.documents.map((doc, index) => (
                  <ul className="list-group">
                    <li className="list-group-item">✅ {doc}</li>
                  </ul>
                ))}
              </ul>
            </div>

            <div className="modal-footer justify-content-between px-4 py-4">
              <button
                className="btn btn-light border px-4 rounded-pill"
                onClick={closeModal}
              >
                ✖ Close
              </button>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success px-4 rounded-pill"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Apply on WhatsApp
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
