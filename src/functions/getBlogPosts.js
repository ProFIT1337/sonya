import { BASE_URL_API } from '../BASE_URL';
import { getPostsAction } from '../redux/Reducers/blogReducer';

export const getBlogPosts = () => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL_API + 'blog/posts/');
    const data = await response.json();

    dispatch(getPostsAction(data));
  };
};
