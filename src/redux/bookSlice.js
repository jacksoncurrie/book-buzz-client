import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice(/* omit slice code*/);

export const { bookAdded } = booksSlice.actions;

export default booksSlice.reducer;

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post._id === postId);
