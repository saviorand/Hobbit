import { createStore } from 'redux';
import itemsReducer from './basket';

const store = createStore(itemsReducer);

export default store
