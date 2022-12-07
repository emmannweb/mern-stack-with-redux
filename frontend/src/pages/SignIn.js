import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signInUser } from '../actions/userAction';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const logInUser = (e) => {
        e.preventDefault();
        dispatch(signInUser({ email, password }));
    }
    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-3 form_wrapper">
                            <div className="form-signin w-100 m-auto mainform">
                                <form onSubmit={logInUser}>

                                    <h1 className="h3 mb-3 fw-normal">Sign In</h1>
                                    <div className="form-floating form_style">
                                        <input onChange={(e) => setEmail(e.target.value)} type="text" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" value={email} />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>

                                    <div className="form-floating form_style">
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' className="form-control" id="pass" value={password} />
                                        <label htmlFor="floatingInput">Password</label>
                                    </div>

                                    <button className="w-100 btn btn-lg btn-primary" type="submit">Log In</button>


                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn