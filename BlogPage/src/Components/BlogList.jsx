import React from 'react';

const BlogList = ({ blogPosts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h3>Blog ID: {post.blogId}</h3>
            <h3>Title: {post.title}</h3>
            <p>Description: {post.description}</p>
            <p>Author: {post.author}</p>
            <img src={post.imageUrl} alt={post.title} style={{ maxWidth: '200px' }} />
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
