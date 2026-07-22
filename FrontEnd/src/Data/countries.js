const countries = [
  {
    id: 1,
    name: "United Arab Emirates",
    shortName: "UAE",
    flag: "https://flagcdn.com/w320/ae.png",
    visaType: "Tourist Visa",
    processingTime: "3-5 Working Days",
    validity: "30 Days",
    fees: "₹7,500",

    documents: [
      "Passport (6 Months Validity)",
      "Recent Passport Size Photograph",
      "Confirmed Flight Ticket",
      "Hotel Booking",
      "Bank Statement (Last 6 Months)",
    ],
  },

  {
    id: 2,
    name: "United States",
    shortName: "USA",
    flag: "https://flagcdn.com/w320/us.png",
    visaType: "Business Visa",
    processingTime: "10-20 Working Days",
    validity: "6 Months",
    fees: "₹16,000",

    documents: [
      "Passport",
      "DS-160 Confirmation",
      "Appointment Letter",
      "Bank Statement",
      "Invitation Letter",
    ],
  },

  {
    id: 3,
    name: "Canada",
    shortName: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    visaType: "Tourist Visa",
    processingTime: "15-30 Days",
    validity: "6 Months",
    fees: "₹9,500",

    documents: ["Passport", "Photo", "Bank Statement", "Travel Itinerary"],
  },

  {
    id: 4,
    name: "United Kingdom",
    shortName: "UK",
    flag: "https://flagcdn.com/w320/gb.png",
    visaType: "Visitor Visa",
    processingTime: "15 Days",
    validity: "6 Months",
    fees: "₹12,000",

    documents: ["Passport", "Photograph", "Income Proof", "Hotel Booking"],
  },
];

export default countries;
