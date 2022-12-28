import axios from "axios"
import {
    USER_FAIL,
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
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error.reponse.data.message
        })
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
            payload: error.reponse.data.message
        })
    }
}