import { GET } from './booksAPI';

const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';
const GET_STORED = 'book-store/books/GET_STORED';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${REMOVE}/pending`:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case `${ADD}/pending`:
      return ([
        ...state,
        action.meta.arg,
      ]);
    case `${ADD}/fulfilled`:
      return state;
    case `${GET}/fulfilled`:
      let DATA = Object.keys(action.payload).map((key) => {
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
      });
      localStorage.setItem('DATA', JSON.stringify(DATA));
      return DATA;
    case GET_STORED:
      return action.payload;
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

const getStoredData = () => ({
  type: GET_STORED,
  payload: JSON.parse(localStorage.getItem('DATA')),
});

export {
  addBook,
  removeBook,
  getStoredData,
  ADD,
  REMOVE,
};
export default booksReducer;
