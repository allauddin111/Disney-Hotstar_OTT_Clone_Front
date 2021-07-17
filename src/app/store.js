import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../feature/movie/movieSlice';
import userReducer from '../feature/user/userSlice';


export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});