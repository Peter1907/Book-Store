import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'book-store/books/GET_BOOKS';
const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';

const getBooks = createAsyncThunk(
  GET,
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xNlCE7tF6v1eIN42ZfCc/books');
    const data = await response.json();
    return data;
  }
)

const addBookAPI = createAsyncThunk(
  ADD,
  async (book) => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xNlCE7tF6v1eIN42ZfCc/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
)

const removeBookAPI = createAsyncThunk(
  REMOVE,
  async (id) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xNlCE7tF6v1eIN42ZfCc/books/${id}`, {
      method: 'DELETE',
    });
  }
)

export { GET, getBooks, addBookAPI,removeBookAPI };
