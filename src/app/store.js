import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice'
import userReducer from '../features/users/usersSlice'
import searchReducer  from "./searchSlice";

export default configureStore({
  reducer: {
    articles: articlesReducer,
    users: userReducer,
    search: searchReducer,
  },
});
