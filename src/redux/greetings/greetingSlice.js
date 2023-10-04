import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    greetings: [],
    loading: false,
    error: null,
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch('http://127.0.0.1:3000/messages');
  return response.json();
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: {
      [fetchGreetings.pending]: (state) => {
          state.loading = true;
      },
      [fetchGreetings.fulfilled]: (state, action) => {
          state.greetings = action.payload;
          state.loading = false;
      },
      [fetchGreetings.rejected]: (state, action) => {
          state.error = action.error.message;
          state.loading = false;
      },
  },
});

export default greetingsSlice.reducer;