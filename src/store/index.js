import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // helps with working with asyn code 

//thunk also helps with implementing middleware 
export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk), // also important for debugging code
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
