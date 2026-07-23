import React from "react";

function ContactCard({ employee }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className={`card shadow border-0 h-100 contact-card ${
          employee.owner ? "owner-card" : ""
        }`}
      >
        <div className="card-body text-center">
          <img
            src={employee.image}
            alt={employee.name}
            className="rounded-circle profile-img mb-3"
          />

          {employee.owner && (
            <span className="badge bg-warning text-dark mb-2">
              Company Owner
            </span>
          )}

          <h4>{employee.name}</h4>

          <p className="text-primary fw-bold">{employee.designation}</p>

          <span className="badge bg-primary mb-3">{employee.department}</span>

          <p>
            <i className="bi bi-envelope-fill text-danger"></i> {employee.email}
          </p>

          <p>
            <i className="bi bi-telephone-fill text-success"></i>{" "}
            {employee.phone}
          </p>

          <a href={`tel:${employee.phone}`} className="btn btn-primary w-100">
            <i className="bi bi-telephone-fill me-2"></i>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
