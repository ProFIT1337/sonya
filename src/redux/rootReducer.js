import { combineReducers } from 'redux';
import { blogReducer } from './Reducers/blogReducer';

import { catalogReducer } from './Reducers/catalogReducer';
import { categoriesReducer } from './Reducers/categoriesReducer';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  categories: categoriesReducer,
  blog: blogReducer,
});
