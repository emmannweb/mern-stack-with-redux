import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogoutAction } from '../actions/userAction';

const Navdashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.logout);

    const logOutEvent = () => {
        dispatch(userLogoutAction());
    }

    useEffect(() => {
        if (user && user.success === true) {
            window.location.reload(true);
            setTimeout(() => {
                navigate('/user/signin');
            }, 200);
        }
    }, [user])

    return (
        <>
            <div className="dashboard_header">
                <div className="logout-div">
                    <div onClick={logOutEvent} className="btn btn-default btn-danger">
                        Log out
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navdashboard