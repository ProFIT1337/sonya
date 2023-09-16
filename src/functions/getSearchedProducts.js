import { BASE_URL_API } from '../BASE_URL';

export const getSearchedProducts = async (search) => {
  const response = await fetch(BASE_URL_API + `catalog/products/?search=${search}`);
  const data = await response.json();
  return data;

  // dispatch(getProductsAction(data));
};
