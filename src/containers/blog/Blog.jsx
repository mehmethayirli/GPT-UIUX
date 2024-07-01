import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

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
          <Article />
        </div>
        <div className="gpt__blog-container_groupB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
};

export default Blog;
