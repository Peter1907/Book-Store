import { GET } from './booksAPI';

const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case `${ADD}/fulfilled`:
      return ([
        ...state,
        action.meta.arg,
      ]);
    case `${GET}/fulfilled`:
      return (
        Object.keys(action.payload).map((key) => {
          const {
            title,
            author,
            category,
          } = action.payload[key][0];
          return ({
            item_id: key,
            title,
            author,
            category,
          });
        })
      );
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

export {
  addBook,
  removeBook,
  ADD,
  REMOVE
};
export default booksReducer;
