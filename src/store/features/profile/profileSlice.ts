import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfileTypes = {
  image: string;
  name: string;
  email: string;
};

const initialState: ProfileTypes = {
  image: '/img/profile.png',
  name: 'Sebastian Soplan',
  email: 'sebastiansoplan@outlook.com'
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    }
  }
});

export const { setName, setEmail } = profileSlice.actions;
export default profileSlice.reducer;
