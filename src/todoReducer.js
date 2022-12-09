import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
/* ----- what is createSlicer ------
A function that accepts an initial state, an object of
 reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
This API is the standard approach for writing Redux logic.
*/
export const todoSlice = createSlice({
  // name of slice
  name: "todo",
  // initial state of the reducer
  initialState,

  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    update: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
  },
  // Will handle the action type `'todo/increment'`
});

export const todoSelector = (state) => state.todo.value;
export const { add } = todoSlice.actions;

export default todoSlice.reducer; //   store looking for reducer whicomes from slicer

/*
createSlice will return an object that looks like:
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>.
    getInitialState: () => State
}


*/
