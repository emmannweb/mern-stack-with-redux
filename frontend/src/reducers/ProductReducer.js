import {
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_RESET,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_LIST_RESET,
    PRODUCT_SINGLE_REQUEST,
    PRODUCT_SINGLE_SUCCESS,
    PRODUCT_SINGLE_FAIL,
    PRODUCT_SINGLE_RESET
} from "../constants/productConstants"

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                count: action.payload.count,
                success: action.payload.success
            }
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case PRODUCT_LIST_RESET:
            return {}
        default:
            return state
    }

}


export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case NEW_PRODUCT_REQUEST:
            return { loading: true, product: {} }
        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload.product,
                success: action.payload.success
            }
        case NEW_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        case NEW_PRODUCT_RESET:
            return { product: {} }
        default:
            return state
    }

}

export const ProductDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_DELETE_RESET:
            return {}
        default:
            return state
    }
}


export const ProductSingleReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_SINGLE_REQUEST:
            return { loading: true }
        case PRODUCT_SINGLE_SUCCESS:
            return {
                // ...state,
                loading: false,
                success: true,
                product: action.payload.product
            }
        case PRODUCT_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_SINGLE_RESET:
            return {}
        default:
            return state
    }
}



export const ProductUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return {
                // ...state,
                loading: false,
                success: true,
                action: action.payload
            }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATE_RESET:
            return {}
        default:
            return state
    }
}


