import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {},
});

export default slice.reducer;
