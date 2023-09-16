import { BASE_URL_API } from '../BASE_URL';
import { getProductsAction } from '../redux/Reducers/productsReducer';

export const getProducts = () => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL_API + 'catalog/products/');
    const data = await response.json();

    dispatch(getProductsAction(data));
  };
};
