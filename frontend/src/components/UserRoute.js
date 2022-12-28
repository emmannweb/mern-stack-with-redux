import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {

    const { userInfo } = useSelector((state) => state.logInUser);
    if (userInfo) {
        return userInfo.role === 0 || userInfo.role === 1 ? children : <Navigate to="/user/signin" />;
    }

    return <Navigate to="/user/signin" />
}

export default UserRoute