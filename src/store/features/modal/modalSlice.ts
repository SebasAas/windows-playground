import { createSlice } from '@reduxjs/toolkit';

export type ModalTypes = {
  showModalOption: boolean;
  showModalCreateFolder: boolean;
};

const initialState: ModalTypes = {
  showModalOption: false,
  showModalCreateFolder: false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModalOption: (state) => {
      state.showModalOption = false;
    },
    openModalOption: (state) => {
      state.showModalOption = true;
    },
    closeModalCreateFolder: (state) => {
      state.showModalCreateFolder = false;
    },
    openModalCreateFolder: (state) => {
      state.showModalCreateFolder = true;
    }
  }
});

export const {
  closeModalOption,
  openModalOption,
  closeModalCreateFolder,
  openModalCreateFolder
} = modalSlice.actions;
export default modalSlice.reducer;
