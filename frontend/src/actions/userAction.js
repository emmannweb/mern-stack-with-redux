import axios from "axios";
import { toast } from 'react-toastify';



import {
    USER_FAIL,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_REQUEST,
    USER_SUCCESS
} from "../constants/userConstants"

export const signInUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: USER_REQUEST })
        const { data } = await axios.post('/api/signin', user);
        localStorage.setItem('logInUser', JSON.stringify(data));
        dispatch({
            type: USER_SUCCESS,
            payload: data
        })
        toast.success("Log In successfully!");

    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);
    }
}


//user profile action
export const userProfile = () => async (dispatch) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST })
        const { data } = await axios.get('/api/getme');
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.reponse.data.error
        })
    }
}


//user logout
export const userLogoutAction = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGOUT_REQUEST })
        const { data } = await axios.get('/api/logout');
        localStorage.removeItem('logInUser');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.reponse.data.error
        })
    }
}



