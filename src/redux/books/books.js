const ADD = 'books/books/ADD';
const REMOVE = 'books/booksREMOVE';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case ADD:
      return ([
        ...state,
        action.data,
      ]);
    default:
      return state;
  }
};

const addBook = (newBook) => ({
  type: ADD,
  data: {
    id: newBook.id,
    title: newBook.title,
    author: newBook.author,
    genre: newBook.genre,
  },
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export { addBook, removeBook, booksReducer };
