import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { debug } from "console";
import { RootState, AppThunk } from "../../../state/store";
import { getMovies } from "./movie.api";
import { Movie, Movies } from "./movie.type";

export interface MoviesState extends Movies{
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  data: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchMovies = createAsyncThunk("movies/fetch", getMovies);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((itm: Movie) => itm.title.match(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { filter } = moviesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovies = (state: RootState) => state.movies.data;

export default moviesSlice.reducer;
