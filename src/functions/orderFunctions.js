import {
  addToOrderAction,
  changeProductQuantityAction,
  getOrderAction,
  removeFromOrderAction,
} from '../redux/Reducers/orderReducer';

export const getOrder = () => {
  return async (dispatch) => {
    let order = JSON.parse(localStorage.getItem('order'));
    if (order) {
      dispatch(getOrderAction(order));
    } else {
      dispatch(getOrderAction([]));
    }
  };
};

export const addProductToOrder = (product) => {
  return async (dispatch) => {
    dispatch(addToOrderAction(product));
  };
};

export const removeProductFromOrder = (product) => {
  return async (dispatch) => {
    dispatch(removeFromOrderAction(product));
  };
};

export const changeProductQuantity = (product, quantity) => {
  return async (dispatch) => {
    console.log(product.id);
    dispatch(changeProductQuantityAction({ id: product.id, quantity: quantity }));
  };
};
