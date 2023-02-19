const initialState = {
  posts: [],
};

const GET_POSTS = 'GET_POSTS';

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const getPostsAction = (payload) => ({ type: GET_POSTS, payload });
