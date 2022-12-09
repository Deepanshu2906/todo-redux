import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo", // name of slice
  initialState, //
  // all the methods
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    update: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer; //   store looking for reducer whicomes from slicer
