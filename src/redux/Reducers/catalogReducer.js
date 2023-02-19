const initialState = {
  catalog: [],
};

const GET_CATALOG = 'GET_CATALOG';

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOG:
      return {
        catalog: action.payload,
      };
    default:
      return state;
  }
};

export const getCatalogAction = (payload) => ({ type: GET_CATALOG, payload });
