import { createSlice } from "@reduxjs/toolkit";
import { postsMockData } from "../mock/posts";

const initialState = {
  posts: postsMockData,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {},
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
