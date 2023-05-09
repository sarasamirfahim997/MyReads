import { booksSlice, initialBookState } from "../redux/slices/bookSlice";

import { getBooksData } from "../redux/helper";
//import { configureStore } from '@reduxjs/toolkit';




describe("Getting All Books List Action", () => {
  const initialState = initialBookState;
  
  
  
  test("sets loading true when getBooksData is pending", () => {
    const action = { type: getBooksData.pending.type };
    const state = booksSlice.reducer(initialState, action);
    expect(state).toEqual({ data: [], loading: true });
  });

/* 
  test("sets loading true when getBooksData is fullfilled", () => {
    const action = { type: getBooksData.pending.type, payload:''};
    const state = booksSlice.reducer(initialState, action);

    expect(state).toEqual({ data: [], loading: true });
  });


 */
  test("sets loading true when getBooksData is rejected", () => {
    const action = { type: getBooksData.rejected.type };
    const state = booksSlice.reducer(initialState, action);
    expect(state).toEqual({ data: [], loading: false });
  });

});
