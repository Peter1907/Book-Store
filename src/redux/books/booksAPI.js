import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = 'book-store/books/GET_BOOKS';
const ADD = 'book-store/books/ADD';
const REMOVE = 'book-store/books/REMOVE';

const getBooks = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xNlCE7tF6v1eIN42ZfCc/books');
    return response.data;
  },
);

const addBookAPI = createAsyncThunk(
  ADD,
  async (book) => {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xNlCE7tF6v1eIN42ZfCc/books', book);
    return book;
  },
);

const removeBookAPI = createAsyncThunk(
  REMOVE,
  async (id) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xNlCE7tF6v1eIN42ZfCc/books/${id}`, {
      method: 'DELETE',
    });
  },
);

export {
  GET,
  getBooks,
  addBookAPI,
  removeBookAPI,
};
