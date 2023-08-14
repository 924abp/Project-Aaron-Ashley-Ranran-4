// AuthorForm.js
import React from 'react';


function AuthorForm({ newAuthor, handleInputChange, createAuthor }) {
  return (
    <div>
      <h2>Create New Author:</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={newAuthor.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={newAuthor.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newAuthor.name}
        onChange={handleInputChange}
      />
      <button onClick={createAuthor}>Create Author</button>
    </div>
  );
}

export default AuthorForm;
