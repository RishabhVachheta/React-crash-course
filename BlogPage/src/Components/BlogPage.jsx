import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (newBlogPost) => {
    setBlogPosts([...blogPosts, newBlogPost]);
  };

  const handleEditSubmit = (editedBlogPost) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[editIndex] = editedBlogPost;
    setBlogPosts(updatedPosts);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog post?"
    );
    if (confirmed) {
      const updatedPosts = [...blogPosts];
      updatedPosts.splice(index, 1);
      setBlogPosts(updatedPosts);
      if (editIndex === index) {
        setEditIndex(null);
      }
    }
  };

  return (
    <div>
      <BlogForm
        onSubmit={handleSubmit}
        isEditing={editIndex !== null}
        initialData={editIndex !== null ? blogPosts[editIndex] : null}
        onEditSubmit={handleEditSubmit}
      />

      <BlogList
        blogPosts={blogPosts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default BlogPage;
