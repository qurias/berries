import { combineReducers } from 'redux';

import products from './products';
import card from './card';

const rootReducer = combineReducers({
  products,
  card
});

export default rootReducer;
