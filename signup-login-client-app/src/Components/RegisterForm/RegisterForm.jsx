import React from 'react'
import "../../styles/RegisterForm.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
const RegisterForm = ({login}) => {
    return (
        <div className="wrapper-register">
            <form action="#">
                <h1>Registration</h1>
                <div className="input-box-register">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon-register"/>
                </div>
                <div className="input-box-register">
                    <input type="email" placeholder="Email" required />
                    <FaEnvelope className="icon-register" />
                </div>
                <div className="input-box-register">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon-register"/>
                </div>

                <div className="remember-forgot-register">
                    <label><input type="checkbox" />I agree to terms & conditions</label>
                </div>

                <button type="submit">Register</button>
                <div className="register-link-register">
                    <p>Already have an account? <a href="#" onClick={login}>Login</a></p>
                </div>
            </form>
        </div>
    );
};
export default RegisterForm;