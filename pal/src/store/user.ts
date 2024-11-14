import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../config";
import { fetchAuth } from "./userAPI.ts";
const initialState = {
  loggedIn: false,
  status: "idle",
};

export const authAsync = createAsyncThunk(
  "counter/fetchAuth",
  async (email, password) => {
    const response = await fetchAuth(email, password);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {},
    extraReducers: (builder) => {
      builder
        .addCase(authAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(authAsync.fulfilled, (state, action) => {
          state.status = "idle";
          state.token += action.payload;
        });
    },
  },
});

export default authSlice;
