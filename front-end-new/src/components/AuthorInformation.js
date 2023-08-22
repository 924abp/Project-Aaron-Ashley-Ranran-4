// AuthorInformation.js
import React from 'react';


function AuthorInformation({ author }) {
  return (
    <div>
      <h2>Author Information:</h2>
      <p>Username: {author.username}</p>
      <p>Name: {author.name}</p>
    </div>
  );
}

export default AuthorInformation;
