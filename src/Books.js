import React, { useState } from 'react';
import Book from './components/Book';
import Form from './components/Form';

function Books() {
  const [bookList] = useState([
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-help',
    }, {
      id: 2,
      title: '40 Laws of Power',
      author: 'Robert Greene',
      genre: 'Self-help',
    }, {
      id: 3,
      title: 'Never Split the Difference',
      author: 'Chris Voss',
      genre: 'Self-help',
    },
  ]);

  return (
    <div className="book-list">
      {bookList.map((book) => (
        <Book
          key={book.id}
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
