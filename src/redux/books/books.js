import { v4 as uuid } from 'uuid';

const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';

const booklist = [
  {
    id: uuid(),
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
  }, {
    id: uuid(),
    title: '40 Laws of Power',
    author: 'Robert Greene',
    genre: 'Self-help',
  }, {
    id: uuid(),
    title: 'Never Split the Difference',
    author: 'Chris Voss',
    genre: 'Self-help',
  },
];

const booksReducer = (state = booklist, action) => {
  switch (action.type) {
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case ADD:
      return ([
        ...state,
        action.newBook,
      ]);
    default:
      return state;
  }
};

const addBook = (newBook) => ({
  type: ADD,
  newBook,
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export { addBook, removeBook };
export default booksReducer;
