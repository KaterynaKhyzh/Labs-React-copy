import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = data.find((p) => p.id === parseInt(postId));
    setPost(foundPost);
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>Date: {post.date}</p>
      <p>Category: {post.category}</p>
      <img src={`/images/blog-photo/${post.image}`} alt={post.title} />
      <p>{post.content}</p>
      <div className="post-author">
        <img
          src={`/images/authors/${post.author.image}`}
          alt={post.author.name}
          className="author-image"
        />
        <div className="author-info"> 
          <p className="author-name">{post.author.name}</p>
          <p>{post.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;