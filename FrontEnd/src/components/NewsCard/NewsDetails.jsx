import { useParams } from "react-router-dom";
import newsData from "../../Data/newsData";

function NewsDetails() {
  const { id } = useParams();

  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return <h2>News Not Found</h2>;
  }

  return (
    <div className="container py-5">
      <h1>{news.title}</h1>
      <p>{news.date}</p>
      <hr />
      <p>{news.details}</p>
    </div>
  );
}

export default NewsDetails;
