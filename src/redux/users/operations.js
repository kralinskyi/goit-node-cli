import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fb03b914650eb210091557.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "users/getUserData",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    try {
      await axios.delete(`/users/${userId}`);
      return userId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async (editedUser, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${editedUser.id}`, editedUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
