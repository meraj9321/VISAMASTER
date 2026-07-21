import React from "react";
import NewsCard from "./NewsCard";
import "./NewsSection.css";
import newsData from "../../Data/newsData";

function NewsSection() {
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📰 Latest News</h2>

        <a href="/" className="text-decoration-none fw-semibold">
          View All →
        </a>
      </div>

      <div className="news-slider">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
