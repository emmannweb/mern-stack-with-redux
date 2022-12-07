import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const logInUser = useSelector((state) => state.logInUser);
    const { success, role } = logInUser;
    return logInUser && role === 1 ? children : <Navigate to="/user/signin" />;

}

export default AdminRoute