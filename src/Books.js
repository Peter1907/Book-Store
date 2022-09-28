import { useSelector } from 'react-redux';
import Book from './components/Book';
import Form from './components/Form';

function Books() {
  const bookList = useSelector((state) => state.books);

  return (
    <div className="book-list">
      {bookList.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          genre={book.genre}
        />
      ))}
      <div className="line" />
      <Form />
    </div>
  );
}

export default Books;
