export const ADD_POSTS = "ADD_POSTS";

let id = 0;

export const addPosts = (text) => {
  return {
    type: ADD_POSTS,
    id: id++,
    text
  };
};
