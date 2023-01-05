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
import { userLogoutReducer, userProfileReducer, userReducerSignIn } from './reducers/UserReducer';


// combine our reducers
const reducer = combineReducers({
    productList: productListReducer,
    newProduct: newProductReducer,
    deleteProduct: ProductDeleteReducer,
    updateProd: ProductUpdateReducer,
    singleProduct: ProductSingleReducer,
    logInUser: userReducerSignIn,
    userProfile: userProfileReducer,
    logout: userLogoutReducer

})

//initial state
let initialState = {
    logInUser: {
        userInfo: localStorage.getItem('logInUser')
            ? JSON.parse(localStorage.getItem('logInUser')) :
            null
    }
};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;