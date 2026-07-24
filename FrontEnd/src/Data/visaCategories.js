import {
  FaPlane,
  FaGraduationCap,
  FaBriefcase,
  FaUserTie,
  FaHeartbeat,
  FaExchangeAlt,
} from "react-icons/fa";

const visaCategories = [
  {
    id: 1,
    title: "Tourist Visa",
    icon: FaPlane,
    description:
      "Explore new destinations for holidays, sightseeing, and leisure travel.",
  },
  {
    id: 2,
    title: "Student Visa",
    icon: FaGraduationCap,
    description:
      "Study at world-class universities with expert visa assistance.",
  },
  {
    id: 3,
    title: "Business Visa",
    icon: FaBriefcase,
    description:
      "Travel for meetings, conferences, and international business.",
  },
  {
    id: 4,
    title: "Work Visa",
    icon: FaUserTie,
    description: "Start your international career with professional guidance.",
  },
  {
    id: 5,
    title: "Medical Visa",
    icon: FaHeartbeat,
    description: "Travel abroad for specialized medical treatment and care.",
  },
  {
    id: 6,
    title: "Transit Visa",
    icon: FaExchangeAlt,
    description:
      "Short-term transit assistance for connecting international flights.",
  },
];

export default visaCategories;
