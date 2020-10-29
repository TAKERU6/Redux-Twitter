import { ADD_POSTS } from "../actions";

const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default posts;
