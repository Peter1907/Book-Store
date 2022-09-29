import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Book from './components/Book';
import Form from './components/Form';
import { getBooks } from './redux/books/booksAPI';
import { useEffect } from 'react';

function Books() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookList = useSelector((state) => state.books, shallowEqual);

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
