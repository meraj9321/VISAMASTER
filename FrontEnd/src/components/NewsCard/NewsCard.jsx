import React from "react";
import { Link } from "react-router-dom";
function NewsCard({ news }) {
  return (
    <div className="news-card card shadow-sm border-0">
      <div className="card-body">
        <span className={`badge ${news.badgeColor}`}>{news.category}</span>

        <h5 className="mt-3 fw-bold">{news.title}</h5>

        <small className="text-muted">{news.date}</small>

        <p className="mt-3 text-secondary">{news.description}</p>

        <Link
          to={`/news/${news.id}`}
          className="btn btn-outline-primary btn-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
