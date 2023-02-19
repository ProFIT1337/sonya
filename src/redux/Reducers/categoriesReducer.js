const initialState = {
  categories: [],
};

const GET_CATEGORIES = 'GET_CATEGORIES';

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.payload,
      };
    default:
      return state;
  }
};

export const getCategoriesAction = (payload) => ({ type: GET_CATEGORIES, payload });
