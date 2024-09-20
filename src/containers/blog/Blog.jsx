import React from "react";
import "./blog.css";
import Article from "../../components/article/Article.jsx";
import { blog01, blog02, blog03, blog04, blog05 } from "./import.js";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article
            img={blog01}
            date="Sep 21, 2024"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt__blog-container_groupB">
          <Article
            img={blog02}
            date="Sep 21, 2024"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog03}
            date="Sep 21, 2024"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog04}
            date="Sep 21, 2024"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog05}
            date="Sep 21, 2024"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
