
// import React, { useState } from 'react';

// const BlogForm = ({ onSubmit }) => {
//   const [blogId, setBlogId] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [author, setAuthor] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newBlogPost = { blogId, title, description, author, imageUrl };
//     onSubmit(newBlogPost);
//     // Reset form after submission
//     setBlogId('');
//     setTitle('');
//     setDescription('');
//     setAuthor('');
//     setImageUrl('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="blogId">Blog ID:</label>
//         <input
//           type="text"
//           id="blogId"
//           value={blogId}
//           onChange={(e) => setBlogId(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="author">Author:</label>
//         <input
//           type="text"
//           id="author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="imageUrl">Image URL:</label>
//         <input
//           type="text"
//           id="imageUrl"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Create Blog</button>
//     </form>
//   );
// };

// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   const handleSubmit = (newBlogPost) => {
//     setBlogPosts([...blogPosts, newBlogPost]);
//   };

//   return (
//     <div>
//       <BlogForm onSubmit={handleSubmit} />

//       {/* Render blog posts */}
//       <h2>Blog Posts</h2>
//       <ul>
//         {blogPosts.map((post, index) => (
//           <li key={index}>
//             <h3>blogId:{post.blogId}</h3>
//             <h3>title:{post.title}</h3>
//             <p>description:{post.description}</p>
//             <p>Author: {post.author}</p>
//             <img src={post.imageUrl} alt={post.title} style={{ maxWidth: '200px' }} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BlogPage;







import React, { useState } from 'react';

const BlogForm = ({ onSubmit, isEditing, initialData, onEditSubmit }) => {
  const [blogId, setBlogId] = useState(initialData ? initialData.blogId : '');
  const [title, setTitle] = useState(initialData ? initialData.title : '');
  const [description, setDescription] = useState(initialData ? initialData.description : '');
  const [author, setAuthor] = useState(initialData ? initialData.author : '');
  const [imageUrl, setImageUrl] = useState(initialData ? initialData.imageUrl : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = { blogId, title, description, author, imageUrl };

    if (isEditing) {
      onEditSubmit(newBlogPost);
    } else {
      onSubmit(newBlogPost);
    }

    // Reset form after submission
    setBlogId('');
    setTitle('');
    setDescription('');
    setAuthor('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="blogId">Blog ID:</label>
        <input
          type="text"
          id="blogId"
          value={blogId}
          onChange={(e) => setBlogId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
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
      </div>
      <button type="submit">{isEditing ? 'Edit' : 'Create'} Blog</button>
    </form>
  );
};

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
    const confirmed = window.confirm('Are you sure you want to delete this blog post?');
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

      {/* Render blog posts */}
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h3>Blog ID: {post.blogId}</h3>
            <h3>Title: {post.title}</h3>
            <p>Description: {post.description}</p>
            <p>Author: {post.author}</p>
            <img src={post.imageUrl} alt={post.title} style={{ maxWidth: '200px' }} />
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;



