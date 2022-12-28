import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../actions/userAction';

const UserProfile = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfile());
    }, [dispatch])
    return (
        <>
            <div className="container-fluid">
                <h1> Name: {user.name}</h1>
                <h1> Email: {user.email}</h1>

            </div>
        </>
    )
}

export default UserProfile