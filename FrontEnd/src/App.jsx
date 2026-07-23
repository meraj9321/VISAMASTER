import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsDetails from "./components/NewsCard/NewsDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
