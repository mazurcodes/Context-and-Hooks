export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const id = Date.now();
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.removeBookID);
    default:
      return state;
  }
};
