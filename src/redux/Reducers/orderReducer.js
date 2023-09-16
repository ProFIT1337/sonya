const initialState = {
  order: {},
};

const GET_ORDER = 'GET_ORDER';
const ADD_TO_ORDER = 'ADD_TO_ORDER';
const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER';
const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY';

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        order: action.payload,
      };
    case ADD_TO_ORDER:
      let old_order = { ...state.order };
      if (old_order[action.payload.id]) {
        old_order[action.payload.id].quantity += 1;
      } else {
        old_order[action.payload.id] = { quantity: 1, product: action.payload };
      }
      localStorage.setItem('order', JSON.stringify(old_order));
      return { order: old_order };
    case REMOVE_FROM_ORDER:
      let old_order_to_remove = { ...state.order };
      delete old_order_to_remove[action.payload.id];
      localStorage.setItem('order', JSON.stringify(old_order_to_remove));

      return { order: old_order_to_remove };
    case CHANGE_PRODUCT_QUANTITY:
      let old_order_to_change_quantity = { ...state.order };
      old_order_to_change_quantity[action.payload.id].quantity = action.payload.quantity;
      localStorage.setItem('order', JSON.stringify(old_order_to_change_quantity));

      return { order: old_order_to_change_quantity };
    default:
      return state;
  }
};

export const getOrderAction = (payload) => ({ type: GET_ORDER, payload });
export const addToOrderAction = (payload) => ({ type: ADD_TO_ORDER, payload });
export const removeFromOrderAction = (payload) => ({ type: REMOVE_FROM_ORDER, payload });
export const changeProductQuantityAction = (payload) => ({ type: CHANGE_PRODUCT_QUANTITY, payload });
