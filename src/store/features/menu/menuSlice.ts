import { createSlice } from '@reduxjs/toolkit';

export type MenuApplicationsTypes = {
  name: string;
  image: string;
  imageSmall: string;
}[];

export type MenuTypes = {
  show: boolean;
  searchText: string;
};

const initialState: MenuTypes = {
  show: false,
  searchText: ''
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.show = !state.show;
    },
    closeMenu: (state) => {
      state.show = false;
    },
    openMenu: (state) => {
      state.show = true;
    },
    setTextToSearch: (state, action) => {
      state.searchText = action.payload;
    }
  }
});

export const { showMenu, closeMenu, openMenu, setTextToSearch } =
  menuSlice.actions;
export default menuSlice.reducer;
