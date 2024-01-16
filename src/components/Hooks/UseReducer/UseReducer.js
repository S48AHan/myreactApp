import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

const bookData = [
  { id: 1, name: "Humaun Ahmed" },
  { id: 2, name: "Jafor Iqbal" },
  { id: 3, name: "Saber Ahmed" },
];

////reducer fn gets the state from useReducer and actions from dispatch
// const reducer = (state, action) => {
//   //action.type , action.payload

//   if (action.type === "ADD") {
//     const allBooks = [...state.books, action.payload];
//     return {
//       ...state,
//       books: allBooks,
//       modalState: true,
//       modalText: "Book Is Added",
//     };
//   }
//   if (action.type === "REMOVE") {
//     const filteredBooks = [...state.books].filter(
//       (book) => book.id !== action.payload
//     );

//     return {
//       ...state,
//       books: filteredBooks,
//       modalState: true,
//       modalText: "Book Is Romoved",
//     };
//   }

//   return state;
// };

function UserReducer() {
  // const [books, setBooks] = useState(bookData);
  // const [modalText, setModalText] = useState("");
  // const [modalState, setModalState] = useState(false);

  ///dispatch controls the actions of reducer fn
  const [bookState, dispatch] = useReducer(reducer, {
    books: bookData,
    modalText: "",
    modalState: false,
  });

  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookName === "") {
      alert("No entry");
    } else {
      const newBook = { id: new Date().getTime().toString(), name: bookName };
      dispatch({ type: "ADD", payload: newBook });
      setBookName("");
    }
    // setBooks((prevBooks) => {
    // const newBook = { id: new Date().getTime().toString(), name: bookName };
    //   console.log(prevBooks);
    //   return [...prevBooks, newBook];
    // });

    // setModalState(true);
    // setModalText("book is added!");

    ///Dispatch Calls the reducer fn
  };

  ///Remove
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Book Name-</h3>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* {modalState && <Modal modalText={modalText} />}*/}
      {bookState.modalState && <Modal modalText={bookState.modalText} />}

      <h3>Book List</h3>
      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name} &nbsp;
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default UserReducer;
