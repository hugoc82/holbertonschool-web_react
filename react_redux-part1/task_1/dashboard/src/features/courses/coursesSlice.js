import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// État minimal attendu par le test
const initialState = { courses: [] };

// Thunk: retourne **un array** (pas un objet { courses: [...] })
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const res = await axios.get('http://localhost:5173/courses.json');
    const data = res.data;
    return Array.isArray(data) ? data : (data?.courses ?? []);
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    // utilitaire
    setCourses(state, action) {
      state.courses = Array.isArray(action.payload) ? action.payload : [];
    },
  },
  extraReducers: (builder) => {
    builder
      // pending/rejected: le test veut un état inchangé
      .addCase(fetchCourses.pending, (state) => state)
      .addCase(fetchCourses.rejected, (state) => state)
      // fulfilled: courses = payload (array)
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = Array.isArray(action.payload) ? action.payload : [];
      })
      // reset quand l'action auth/logout passe
      .addCase('auth/logout', (state) => {
        state.courses = [];
      });
  },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
export { initialState };