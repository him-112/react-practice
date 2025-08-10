// Filename: src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for this slice
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter', // The name of the slice
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers.
    // It doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based on those changes.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the payload to set the value
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer function for the store
export default counterSlice.reducer;