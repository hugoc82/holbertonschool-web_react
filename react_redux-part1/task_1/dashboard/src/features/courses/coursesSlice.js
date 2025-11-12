import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { items: [], status: 'idle', error: null };

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const res = await axios.get('http://localhost:5173/courses.json');
    return res.data; // le test attend items = payload tel quel
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message ?? 'Request failed';
      });
  },
});

export default coursesSlice.reducer;