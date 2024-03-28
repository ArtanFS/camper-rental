import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65fac89d3909a9a65b1b85fa.mockapi.io/api/v1/';
// const BASE_URL = 'http://localhost:3001/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCampers = createAsyncThunk('getCampers', async thunkAPI => {
  try {
    const { data } = await api.get(`adverts`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getCampersByPage = createAsyncThunk(
  'getCampersByPage',
  async (page, thunkAPI) => {
    try {
      const { data } = await api.get(`adverts?p=${page}&l=4`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
