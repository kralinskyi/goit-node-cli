import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, getUserData, deleteUser } from "./operations";

const slice = createSlice({
  name: "users",
  initialState: {
    items: [],
    currentUser: null,
    loading: false,
    isUserDeleting: false,
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
      })
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.currentUser = payload;
      })
      .addCase(getUserData.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isUserDeleting = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isUserDeleting = false;
        state.error = null;
        state.items = state.items.filter((user) => user.id !== payload);
      })
      .addCase(deleteUser.rejected, (state, { error }) => {
        state.isUserDeleting = false;
        state.error = error;
      });
  },
});

export default slice.reducer;
