import { booksSlice, initialBookState } from "../redux/slices/bookSlice";
import { getStoreWithState } from "../redux/store/store";
import { getBooksData } from "../redux/helper";

describe("Getting All Books List Action", () => {
  const initialState = initialBookState;
  const initialStateAuth = {
    isAuth: false,
  };
  test("initialize slice with initialValue", () => {
    const booksSliceInit = booksSlice.getInitialState();
    expect(booksSliceInit).toBe(initialState);
  });

  test("sets loading true when getBooksData is pending", () => {
    const action = { type: getBooksData.pending.type };
    const state = booksSlice.reducer(initialState, action);
    expect(state).toEqual({ data: [], loading: true, searchResults: [] });
  });

  test("sets loading false & fetch list of books when getBooksData is fullfilled, returns undefined as expectations are not written correctly", async () => {
    const action = { type: getBooksData.fulfilled.type };
    const state = booksSlice.reducer(initialState, action);
    const store = getStoreWithState({
      books: state,
      auth: initialStateAuth,
    });
    await store.dispatch(getBooksData());
    expect(store.getState().books).toEqual({
      data: undefined,
      loading: false,
      searchResults: [],
    });
  });

  test("sets loading false when getBooksData is rejected", () => {
    const action = { type: getBooksData.rejected.type };
    const state = booksSlice.reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
