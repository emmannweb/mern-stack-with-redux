import axios from 'axios';
import {
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_SINGLE_FAIL,
    PRODUCT_SINGLE_REQUEST,
    PRODUCT_SINGLE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS
} from "../constants/productConstants"


export const listOfProducts = (pageNumber, cat) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(`/api/products/all?pageNumber=${pageNumber}&cat=${cat}`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.reponse.data.message
        })
    }
}


export const createProduct = (product) => async (dispatch) => {

    try {
        dispatch({ type: NEW_PRODUCT_REQUEST })
        const { data } = await axios.post("/api/product/create", product)
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.reponse.data.message
        })
    }
}


export const deleteProduct = (productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST })
        const { data } = await axios.delete(`/api/product/delete/${productId}`)
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.reponse.data.message
        })
    }
}


export const SingleProd = (productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_SINGLE_REQUEST })
        const { data } = await axios.get(`/api/product/${productId}`)
        dispatch({
            type: PRODUCT_SINGLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_SINGLE_FAIL,
            payload: error.reponse.data.message
        })
    }
}


export const updateProduct = (product) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST })
        const { data } = await axios.put(`/api/product/update/${product._id}`, product)
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.reponse.data.message
        })
    }
}