import React from "react";
import employees from "../data/employee";
import ContactCard from "../components/Contact/ContactCard";
import "../components/Contact/Contact.css";

function Contact() {
  const partners = employees.filter((emp) => emp.type === "partner");
  const visaExecutives = employees.filter((emp) => emp.type === "visa");
  const accountants = employees.filter((emp) => emp.type === "accounts");
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary text-center">Leadership Team</h2>

      <div className="row mb-5 justify-content-center">
        {partners.map((emp) => (
          <ContactCard key={emp.id} employee={emp} />
        ))}
      </div>

      <h2 className="mb-4 text-primary text-center">Visa Executives</h2>

      <div className="row mb-5 justify-content-center ">
        {visaExecutives.map((emp) => (
          <ContactCard key={emp.id} employee={emp} />
        ))}
      </div>

      <h2 className="mb-4 text-primary text-center">Accounts Department</h2>

      <div className="row justify-content-center">
        {accountants.map((emp) => (
          <ContactCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
