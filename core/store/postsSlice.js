import { createSlice } from "@reduxjs/toolkit";
import { postsMockData } from "../mock/posts";
import { act } from "react-dom/test-utils";

const initialState = {
  posts: postsMockData,
  currentPost: {
    id: 1,
    title: "",
    content: "",
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      state.currentPost = post;
    },
    addPost: (state, action) => {
      const uniqId = Math.random().toString(16).slice(2);
      console.log(action);
      state.posts.push({
        id: uniqId,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
  },
});

export const { getPost, addPost } = postsSlice.actions;
export default postsSlice.reducer;
