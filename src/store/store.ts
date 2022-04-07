import { configureStore } from '@reduxjs/toolkit';
import applicationsReducer from './features/applications/applicationsSlice';
import menuReducer from './features/menu/menuSlice';
import profileReducer from './features/profile/profileSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
    menu: menuReducer,
    profile: profileReducer,
    modal: modalReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
