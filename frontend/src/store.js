import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
    productListReducer,
    newProductReducer,
    ProductDeleteReducer,
    ProductUpdateReducer,
    ProductSingleReducer
} from './reducers/ProductReducer';
import { userReducer } from './reducers/UserReducer';


// combine our reducers
const reducer = combineReducers({
    productList: productListReducer,
    newProduct: newProductReducer,
    deleteProduct: ProductDeleteReducer,
    updateProd: ProductUpdateReducer,
    singleProduct: ProductSingleReducer,
    logInUser: userReducer
})

//initial state
let initialState = {
    logInUser: localStorage.getItem('logInUser')
        ? JSON.parse(localStorage.getItem('logInUser')) :
        {}
};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;