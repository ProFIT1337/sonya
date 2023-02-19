import { BASE_URL_API } from '../BASE_URL';
import { getCategoriesAction } from '../redux/Reducers/categoriesReducer';

export const getCategories = () => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL_API + 'catalog/categories/');
    const data = await response.json();

    dispatch(getCategoriesAction(data));
  };
};
