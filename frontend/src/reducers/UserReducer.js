import {
    USER_FAIL,
    USER_PROFILE_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_RESET,
    USER_PROFILE_SUCCESS,
    USER_REQUEST,
    USER_RESET,
    USER_SUCCESS
} from "../constants/userConstants"

export const userReducerSignIn = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return { ...state, loading: true }
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
            }
        case USER_FAIL:
            return { ...state, loading: false, error: action.payload }
        case USER_RESET:
            return {}
        default:
            return state;
    }

}


// user profile
export const userProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { ...state, loading: true }
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                success: action.payload.success
            }
        case USER_PROFILE_FAIL:
            return { ...state, loading: false, error: action.payload }
        case USER_PROFILE_RESET:
            return {}
        default:
            return state;
    }

}

