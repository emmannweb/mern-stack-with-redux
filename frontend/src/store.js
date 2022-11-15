import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { productListReducer, newProductReducer } from './reducers/ProductReducer';


// combine our reducers
const reducer = combineReducers({
    productList: productListReducer,
    newProduct: newProductReducer
})

//initial state
let initialState = {};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;