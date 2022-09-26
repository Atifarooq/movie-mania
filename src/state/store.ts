import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from '../module/Movies/lib/movies.slice';
//import movieReducer from '../module/Movies/lib/movie.slice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    //movie: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
