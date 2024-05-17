import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (newBlogPost) => {
    const updatedPosts = [...blogPosts, newBlogPost];
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const handleEditSubmit = (editedBlogPost) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[editIndex] = editedBlogPost;
    setBlogPosts(updatedPosts);
    setEditIndex(null);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
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
      setEditIndex(null);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    }
  };

  const handleDuplicate = (index) => {
    const duplicatedPost = { ...blogPosts[index] };
    duplicatedPost.blogId = generateBlogId();
    const updatedPosts = [...blogPosts, duplicatedPost];
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  const generateBlogId = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    let blogIdSuffix = 1;
    const storedData = JSON.parse(localStorage.getItem("blogPosts")) || [];
    if (storedData.length > 0) {
      const lastBlogId = storedData[storedData.length - 1].blogId;
      const lastBlogIdDate = lastBlogId.substring(0, 8);
      if (lastBlogIdDate === `${year}${month}${day}`) {
        blogIdSuffix = parseInt(lastBlogId.substring(8)) + 1;
      }
    }

    const paddedSuffix = blogIdSuffix.toString().padStart(4, "0");
    return `${year}${month}${day}${paddedSuffix}`;
  };

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts"));
    if (savedPosts) {
      setBlogPosts(savedPosts);
    }
  }, []);

  const filteredBlogPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search blogs by title, description, or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="parent">
      <BlogForm
        onSubmit={handleSubmit}
        isEditing={editIndex !== null}
        initialData={editIndex !== null ? blogPosts[editIndex] : null}
        onEditSubmit={handleEditSubmit}
      />

      <BlogList
        blogPosts={filteredBlogPosts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDuplicate={handleDuplicate}
      />
      </div>
    </div>
  );
};

export default BlogPage;
