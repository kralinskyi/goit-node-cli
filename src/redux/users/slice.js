import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const slice = createSlice({
  name: "users",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchUsers.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      });
  },
});

export default slice.reducer;
