import { BASE_URL_API } from '../BASE_URL';
import { getCatalogAction } from '../redux/Reducers/catalogReducer';

export const getCatalog = () => {
  return async (dispatch) => {
    const response = await fetch(BASE_URL_API + 'catalog/rooms/');
    const data = await response.json();

    dispatch(getCatalogAction(data));
  };
};
