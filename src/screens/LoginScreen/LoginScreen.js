
import React, { useState } from 'react';
import './LoginScreen.scss';
const Login = (props) => {
    const [value, setValue] = useState(false);
    const {
        setHasAccount,
        setUserName,
    } = props;
    return (
        <div className="hero">
            <div className="hero__content" >
                <div style={{display: "flex"}}>
                <div>
                <p>Harvard Art Museums</p>
                <a className="btn" onClick={() => {
                    setValue(true);
                    setHasAccount(false);
                }}>Sign up</a>
                <a className="btn" onClick={() => {
                    setValue(true);
                    setHasAccount(true);
                }}>Log in</a>
                </div>
                
                </div>
            </div>
            
        </div>

    );
}
export default Login;