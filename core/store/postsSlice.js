import { createSlice } from "@reduxjs/toolkit";
import { postsMockData } from "../mock/posts";

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

    editPost: (state, action) => {
      const posts = state.posts;

      state.posts = posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },

    removePost: (state, action) => {
      const posts = state.posts;
      state.posts = posts.filter((post) => post.id !== action.payload);
      state.currentPost = {};
    },
  },
});

export const { getPost, addPost, editPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
