import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../actions/userAction';
import Navdashboard from '../../components/Navdashboard';

const UserProfile = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfile());
    }, [dispatch])
    return (
        <>
            <div className="container-fluid">
                <Navdashboard />
                <div className="container" style={{ paddingTop: "15px" }}>
                    <h1> Name: {user.name}</h1>
                    <h1> Email: {user.email}</h1>
                </div>

            </div>
        </>
    )
}

export default UserProfile