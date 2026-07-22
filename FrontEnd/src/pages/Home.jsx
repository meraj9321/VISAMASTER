import Navbar from "../components/navbar/Nav";
import SearchSection from "../components/SearchSection/SearchSection";
import NewsCard from "../components/NewsCard/NewsSection";
import NewsSection from "../components/NewsCard/NewsSection";
import NewsDetails from "../components/NewsCard/NewsDetails";
import B2bSection from "../components/B2B_Section/B2bSection";
import Footer from "../components/Footer/Footer";
import Services from "./Services";
function Home() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <SearchSection></SearchSection>
      <NewsSection></NewsSection>
      <B2bSection></B2bSection>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}
export default Home;
