import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';
import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
