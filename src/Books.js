import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './components/Book';
import Form from './components/Form';
import { getBooks } from './redux/books/booksAPI';
import { getStoredData } from './redux/books/books';

function Books() {
  const dispatch = useDispatch();

  let bookList = useSelector((state) => state.books);
  const DATA = localStorage.getItem('DATA');
  
  const updateList = () => {
    DATA ? dispatch(getStoredData()) : dispatch(getBooks());
  };

  useEffect(() => {
    updateList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="book-list">
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          item_id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <div className="line" />
      <Form />
    </div>
  );
}

export default Books;
