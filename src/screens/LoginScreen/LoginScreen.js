
import React, { useState } from 'react';
import './LoginScreen.scss';
const Login = (props) => {
    const [value, setValue] = useState(false);
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        emailError,
        passwordError,
        hasAccount,
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
                <div className="LoginUser">
                <section className="login">
                    <div className="loginContainer" style={{ opacity: value ? 1 : 0 }}>
                        <div className="btnContainer">
                            {hasAccount ? (
                                <>
                                    <label>E Mail</label>
                                    <input
                                        type="text"
                                        autoFocus
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <p className="ErrorMsg">{emailError}</p>
                                    <label >Password</label>
                                    <input
                                        type="password"
                                        autoFocus
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                        <p className="ErrorMsg">{passwordError}</p>
                                    <button onClick={handleLogin}>Log in</button>
                                    <p >Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                                </>
                            ) : (
                                <>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        autoFocus
                                        required
                                        onChange={(e) => setUserName(e.target.value)} />
                                    <label>Age</label>
                                    <input
                                        type="text"
                                        autoFocus
                                        required
                                    />
                                    <label>E Mail</label>
                                    <input
                                        type="text"
                                        autoFocus
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <p className="ErrorMsg">{emailError}</p>
                                    <label >Password</label>
                                    <input
                                        type="password"
                                        autoFocus
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <p className="ErrorMsg">{passwordError}</p>

                                    <button onClick={handleSignup}>Sign up</button>
                                    <p>Have an account ?<span onClick={() => setHasAccount(!hasAccount)}>Log in</span></p>
                                </>
                            )}
                        </div>
                    </div>
                </section>
                </div>
                </div>
            </div>
            
        </div>

    );
}
export default Login;

 
