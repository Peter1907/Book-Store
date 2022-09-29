import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookAPI } from '../redux/books/booksAPI';

const Form = () => {
  const dispatch = useDispatch();
  const [book, modify] = useState({
    item_id: uuid(),
    title: '',
    author: '',
    category: 'Unknown',
  });

  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          e.target.childNodes[0].value = '';
          e.target.childNodes[1].value = '';
          e.target.childNodes[2].value = '';
          modify({
            id: uuid(),
            title: '',
            author: '',
            category: 'Unknown',
          });
          dispatch(addBookAPI(book));
        }}
      >
        <input
          className="title-field"
          type="text"
          placeholder="Book title"
          name="title"
          required
          onChange={(e) => modify({
            ...book,
            [e.target.name]: e.target.value,
          })}
        />
        <input
          className="author-field"
          type="text"
          placeholder="Author"
          name="author"
          required
          onChange={(e) => modify({
            ...book,
            [e.target.name]: e.target.value,
          })}
        />
        <input
          className="category-field"
          type="text"
          placeholder="Category"
          name="category"
          onChange={(e) => modify({
            ...book,
            [e.target.name]: e.target.value,
          })}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
