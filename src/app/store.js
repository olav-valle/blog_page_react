import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice'
import userReducer from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    articles: articlesReducer,
    users: userReducer,
  },
});
