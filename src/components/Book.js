/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/booksAPI';

const Book = ({
  item_id,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="info">
        <div className="headings">
          <h4 className="genre">{category}</h4>
          <h2 className="title">{title}</h2>
          <h4 className="author">{author}</h4>
          <div className="buttons">
            <button type="button">Comments</button>
            <p className="separator" />
            <button
              type="button"
              onClick={() => dispatch(removeBookAPI(item_id))}
            >
              Remove
            </button>
            <p className="separator" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="status">
          <div className="Oval-2" />
          <div>
            <p className="percentage">60%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>
      <div className="progress">
        <h3 className="chapter">Current Chapter</h3>
        <p>Chapter 7</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
