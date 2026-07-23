import partner1 from "../assets/owner1.jpg";
import partner2 from "../assets/owner2.jpg"; // Change this to your second partner's image

import visa1 from "../assets/hr.jpg";
import visa2 from "../assets/developer.jpg";

import account1 from "../assets/marketing.jpg";

const employees = [
  {
    id: 1,
    name: "Partner 1",
    designation: "Partner",
    department: "Management",
    phone: "+919876543210",
    email: "partner1@company.com",
    image: partner1,
    type: "partner",
  },

  {
    id: 2,
    name: "Partner 2",
    designation: "Partner",
    department: "Management",
    phone: "+919876543211",
    email: "partner2@company.com",
    image: partner2,
    type: "partner",
  },

  {
    id: 3,
    name: "Rahul Sharma",
    designation: "Visa Executive",
    department: "Visa Processing",
    phone: "+919876543212",
    email: "rahul@company.com",
    image: visa1,
    type: "visa",
  },

  {
    id: 4,
    name: "Priya Patel",
    designation: "Visa Executive",
    department: "Visa Processing",
    phone: "+919876543213",
    email: "priya@company.com",
    image: visa2,
    type: "visa",
  },

  {
    id: 5,
    name: "Neha Verma",
    designation: "Accountant",
    department: "Accounts",
    phone: "+919876543214",
    email: "neha@company.com",
    image: account1,
    type: "accounts",
  },
];

export default employees;
