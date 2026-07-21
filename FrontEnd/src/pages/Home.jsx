import Navbar from "../components/navbar/Nav";
import SearchSection from "../components/SearchSection/SearchSection";
import NewsCard from "../components/NewsCard/NewsSection";
import NewsSection from "../components/NewsCard/NewsSection";
import NewsDetails from "../components/NewsCard/NewsDetails";

function Home() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <SearchSection></SearchSection>
      <NewsSection></NewsSection>
    </div>
  );
}
export default Home;
