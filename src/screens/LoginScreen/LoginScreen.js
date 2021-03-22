
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
                }}>Kayıt Ol</a>
                <a className="btn" onClick={() => {
                    setValue(true);
                    setHasAccount(true);
                }}>Giriş Yap</a>
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
                                    <label >Şifre</label>
                                    <input
                                        type="password"
                                        autoFocus
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <button onClick={handleLogin}>Giriş Yap</button>
                                    <p>Bir Hesabın Yok Mu ? <span onClick={() => setHasAccount(!hasAccount)}>Kayıt Ol</span></p>
                                </>
                            ) : (
                                <>
                                    <label>Isim</label>
                                    <input
                                        type="text"
                                        autoFocus
                                        required />
                                    <label>Yaş</label>
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
                                    <label  >Şifre</label>
                                    <input
                                        type="password"
                                        autoFocus
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <p className="ErrorMsg">{passwordError}</p>

                                    <button onClick={handleSignup}>Kayıt Ol</button>
                                    <p>Bir Hesabın Varmı ? <span onClick={() => setHasAccount(!hasAccount)}>Giriş Yap</span></p>
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

 
