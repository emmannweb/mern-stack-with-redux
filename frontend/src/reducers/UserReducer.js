import { USER_FAIL, USER_REQUEST, USER_RESET, USER_SUCCESS } from "../constants/userConstants"

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return { ...state, loading: true, user: {} }
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                success: action.payload.success
            }
        case USER_FAIL:
            return { ...state, loading: false, error: action.payload }
        case USER_RESET:
            return {}
        default:
            return state;
    }

}