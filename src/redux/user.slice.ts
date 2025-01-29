import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  token: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSession(
      state,
      action: PayloadAction<{
        token: string;
        id: string;
        name: string;
        email: string;
        isAuthenticated: boolean;
      }>,
    ) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    clearSession(state) {
      state.id = '';
      state.name = '';
      state.email = '';
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export const {setSession, clearSession} = userSlice.actions
export default userSlice.reducer