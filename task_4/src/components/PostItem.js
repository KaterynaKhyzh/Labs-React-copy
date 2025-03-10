import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <div className="post-item">
      <div className="post-image">
        <img src={`/images/blog-photo/${post.image}`} alt={post.title} />
      </div>
      <div className="post-details-one">
        <p className="post-category">{post.category}</p>
        <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
        <p>{post.content.substring(0, 100)}...</p>
        <div className="post-author">
          <img src={`/images/authors/${post.author.image}`} alt={post.author.name} className="author-image" />
          <div className="author-info"> 
            <p className="author-name">{post.author.name}</p>
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;