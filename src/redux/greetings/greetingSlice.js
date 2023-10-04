import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        greetings: action.payload,
        loading: false,
      }))
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        loading: false,
      }));
  },
});

export default greetingsSlice.reducer;
