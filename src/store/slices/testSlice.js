// src/redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = testSlice.actions;
export default testSlice.reducer;
