import React from 'react';

const Form = () => {
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form className="form" action="POST">
        <input className="title-field" type="text" placeholder="Book title" />
        <input className="author-field" type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  )
};

export default Form;
