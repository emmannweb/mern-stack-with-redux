import { NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_RESET, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                count: action.payload.count
            }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
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
