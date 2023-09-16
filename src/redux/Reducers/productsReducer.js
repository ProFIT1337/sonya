const initialState = {
  products: [],
};

const GET_PRODUCTS = 'GET_PRODUCTS';

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload });
