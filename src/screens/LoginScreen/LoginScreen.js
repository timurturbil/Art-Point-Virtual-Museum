
import React from 'react';
import './LoginScreen.css';
const Login = (props) => {
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
        <section className="login">
            <div className="loginContainer">
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
    );
}
export default Login;
