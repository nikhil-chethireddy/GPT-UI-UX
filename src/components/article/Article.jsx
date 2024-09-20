import React from "react";
import "./article.css";

const Article = ({ img, date, text }) => {
  return (
    <div className="gpt__article">
      <div className="gpt__article-image">
        <img src={img} alt={img} />
      </div>
      <div className="gpt__article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
