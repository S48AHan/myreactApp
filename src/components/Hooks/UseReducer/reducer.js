export const reducer = (state, action) => {
  //action.type , action.payload

  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      modalState: true,
      modalText: "Book Is Added",
    };
  }
  if (action.type === "REMOVE") {
    const filteredBooks = [...state.books].filter(
      (book) => book.id !== action.payload
    );

    return {
      ...state,
      books: filteredBooks,
      modalState: true,
      modalText: "Book Is Romoved",
    };
  }

  return state;
};
