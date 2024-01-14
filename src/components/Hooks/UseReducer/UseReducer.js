import React, { useState } from "react";

const bookData = [
  { id: 1, name: "Humaun Ahmed" },
  { id: 2, name: "Jafor Iqbal" },
  { id: 3, name: "Saber Ahmed" },
];

function UserReducer() {
  const [books, setBooks] = useState(bookData);

  return (
    <div>
      <form>
        <h3>Add Book Name-</h3>
        <input
          type="text"
          onChange={(e) => {
            setBooks(e.target.value);
          }}
        ></input>
      </form>

      <h3>Book List</h3>
      {books.map((book, index) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
}

export default UserReducer;
