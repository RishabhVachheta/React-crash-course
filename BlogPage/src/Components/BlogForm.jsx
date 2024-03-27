



import React, { useState } from "react";

const BlogForm = ({ onSubmit, isEditing, initialData, onEditSubmit }) => {
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [description, setDescription] = useState(
    initialData ? initialData.description : ""
  );
  const [author, setAuthor] = useState(initialData ? initialData.author : "");
  const [imageUrl, setImageUrl] = useState(
    initialData ? initialData.imageUrl : ""
  );
  const [errors, setErrors] = useState({});

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

    return `${year}${month}${day}${blogIdSuffix.toString().padStart(4, "0")}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Title length
    if (title.length < 4 || title.length > 10) {
      setErrors({ title: "Title should be between 4 to 10 characters long" });
      return;
    }

    // Validate Description length
    if (description.length < 20 || description.length > 50) {
      setErrors({
        description: "Description should be between 20 to 50 characters long",
      });
      return;
    }

    // Validate Author length
    if (author.length < 3 || author.length > 10) {
      setErrors({ author: "Author should be between 3 to 10 characters long" });
      return;
    }

    // Validate Image URL format
    const validFormats = ["png", "jpg", "jpeg"];
    const isBase64 = /^data:image\/(png|jpg|jpeg);base64,/.test(imageUrl);
    const urlParts = imageUrl.split(".");
    const format = urlParts[urlParts.length - 1].toLowerCase();
    if (!validFormats.includes(format) && !isBase64) {
      setErrors({
        imageUrl:
          "Invalid image URL format. Supported formats: PNG, JPG, JPEG, base64 URL",
      });
      return;
    }

    const newBlogPost = {
      blogId: generateBlogId(),
      title,
      description,
      author,
      imageUrl,
    };

    let storedData = JSON.parse(localStorage.getItem("blogPosts")) || [];
    storedData.push(newBlogPost);
    localStorage.setItem("blogPosts", JSON.stringify(storedData));

    if (isEditing) {
      onEditSubmit(newBlogPost);
    } else {
      onSubmit(newBlogPost);
    }

    // Reset form after submission
    setTitle("");
    setDescription("");
    setAuthor("");
    setImageUrl("");
    setErrors({});
  };

  // Set form fields when editing
  React.useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setAuthor(initialData.author);
      setImageUrl(initialData.imageUrl);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          maxLength={10}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          maxLength={50}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          maxLength={10}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        {errors.author && <p className="error">{errors.author}</p>}
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
      </div>
      <button type="submit">{isEditing ? "Edit" : "Create"} Blog</button>
    </form>
  );
};

export default BlogForm;
