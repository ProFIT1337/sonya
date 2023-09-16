import { combineReducers } from 'redux';
import { blogReducer } from './Reducers/blogReducer';

import { catalogReducer } from './Reducers/catalogReducer';
import { categoriesReducer } from './Reducers/categoriesReducer';
import { orderReducer } from './Reducers/orderReducer';
import { productsReducer } from './Reducers/productsReducer';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  categories: categoriesReducer,
  blog: blogReducer,
  products: productsReducer,
  order: orderReducer,
});
