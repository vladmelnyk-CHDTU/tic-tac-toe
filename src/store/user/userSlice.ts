import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string | null;
  email: string | null;
}

const initialState: User = {
  name: null,
  email: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: state => {
      state.name = null;
      state.email = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
