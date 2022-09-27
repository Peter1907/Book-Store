const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case ADD:
      return ([
        ...state,
        action.data,
      ])
    default:
      return state;
  }
};

const addBook = ({ id, title, author, genre }) => ({
  type: ADD,
  data: {
    id,
    title,
    author,
    genre,
  }
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export { addBook, removeBook, booksReducer };
